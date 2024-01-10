const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const bcrypt = require("bcryptjs");
const { adminValidation } = require("../utils/inputValidation");
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const inputdata = req.body;
  const inputValidation = adminValidation(inputdata);
  if (!inputValidation["success"]) {
    return res.status(400).json({ error: "Input validation failed!!!" });
  }

  //hashing the password
  inputdata["password"] = await bcrypt.hash(inputdata["password"], 10);

  const newAdmin = await Admin.create(inputdata);
  if (newAdmin) {
    return res.status(201).json({ message: "Admin created successfully" });
  }
  return res.status(400).json({ message: "Admin not created!!!" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const courseDetails = req.body;
  //input validation

  // logic for the unique id for every course.
  const totalCourseAvail = await Course.find();
  courseDetails.id = totalCourseAvail.length + 1;
  // storing it inside the db
  const newCourse = await Course.create(courseDetails);
  if (newCourse) {
    return res
      .status(201)
      .json({
        message: "Course created successfully",
        courseId: newCourse._id,
      });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find();
  if (allCourses.length) {
    return res.status(200).json({ courses: allCourses });
  }
  return res.status(400).json({ error: "No data is present" });
});

module.exports = router;
