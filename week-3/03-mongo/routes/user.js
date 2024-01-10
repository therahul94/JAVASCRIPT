const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {userValidation} = require('../utils/inputValidation');
const {User, Course} = require('../db/index');
const bcrypt = require("bcryptjs");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const inputdata = req.body;
    userValidation(inputdata);

    //hashing the password
    inputdata['password'] = await bcrypt.hash(inputdata['password'], 10)
    const newUser = await User.create(inputdata);
    if(newUser){
        return res.status(201).json({ message: 'User created successfully' })
    }
    return res.status(400).json({message: 'User not created!!!'})
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    const allCourses = await Course.find();
    if(allCourses.length){
        return res.status(200).json({courses: allCourses})
    }
    return res.status(400).json({error: 'No data is present'})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    if(!courseId){
        return res.status(400).json({
            "error": "Bad Request",
            "message": "Missing required parameters: 'courseId'"
          });
    }

    //check if the course is availble or not..
    console.log("fsadasdfasfd", courseId);
    const iscourseAvail = await Course.findOne({_id: courseId});
    if(!iscourseAvail){
        return res.status(400).json({error: "Course is not available!!! Can't buy the Course."})
    }
    if(!iscourseAvail.published){
        return res.status(400).json({error: "The Course you are trying to purchase is not published!!! Cannot buy this course!!!"})
    }

    const buyCourse = await User.findOneAndUpdate({_id: req['userDetails']['_id']}, {
        $push: {
            courses: courseId
        }
    }, {new: true});

    // console.log(req['userDetails']['_id'], 21212121)

    if(buyCourse){
        return res.status(200).json({message: 'Course purchased successfully'})
    }
    return res.status(400).json({error: "Something went wrong!!! Course is not purchased please try again!!!"})

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const allPurchasedCourses = await User.findOne({_id: req['userDetails']["_id"]}).populate('courses');
    if(allPurchasedCourses){
        return res.status(200).json({purchasedCourses: allPurchasedCourses['courses']})
    }
    return res.status(400).json({error: 'Something went wrong!!!'})
});

module.exports = router