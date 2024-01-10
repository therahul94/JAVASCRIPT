const zod = require("zod");

let adminSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

let userSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
  });

function adminValidation(obj) {
  const validationOutput = adminSchema.safeParse(obj);
  return validationOutput;
} 

function userValidation(obj) {
  const validationOutput = userSchema.safeParse(obj);
  return validationOutput;
} 


module.exports = {adminValidation,
  userValidation}