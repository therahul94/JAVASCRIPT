const { User } = require("../db/index");
const bcrypt = require('bcryptjs');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and
    //  validate the user from the user DB.
    //  Check readme for the exact headers to be expected

    const { username, password } = req.headers;

    // authentication logic
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username or password is not available!!!" });
    }
  
    // varification
  const userDetails = await User.findOne({
    username,
  });
  if(!userDetails){
    return res.status(403).json({error: "Username is Invalid!!! Please try again"})
  }
  const isPasswordMatched = await bcrypt.compare(password, userDetails['password'])
  if(!isPasswordMatched){
    return res.status(403).json({error: "Authorization failed"})
  }
  req['userDetails'] = userDetails;
    next();
}

module.exports = userMiddleware;