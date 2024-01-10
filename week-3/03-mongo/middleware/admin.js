const { Admin } = require("../db/index");
const bcrypt = require('bcryptjs');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB.
  // Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  // authentication logic
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username or password is not available!!!" });
  }

  // varification
  const adminDetails = await Admin.findOne({
    username: username,
  });
  // console.log(adminDetails)
  if(!adminDetails){
    return res.status(403).json({error: "Username is Invalid!!! Please try again"})
  }
  const isPasswordMatched = await bcrypt.compare(password, adminDetails['password'])
  console.log(isPasswordMatched)
  if(!isPasswordMatched){
    return res.status(403).json({error: "Authorization failed"})
  }

  next();
  
}

module.exports = adminMiddleware;
