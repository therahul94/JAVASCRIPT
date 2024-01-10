{
  /* 


const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}


*/
}

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://admin1:admin123@cluster0.il5wcvl.mongodb.net/")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB not connected");
  });

// Define schemas

const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  courses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Course'
  },
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageLink: {
    type: String,
  },
  published: {
    type: Boolean,
    default: true
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
