const zod = require("zod");
const CardSchema = zod.object({
  fullname: zod.string(),
  description: zod.string(),
  Interests: zod.array(),
  SocialmediaHandles: zod.array(),
});

function inputValidation(InputObj) {
  const response = CardSchema.safeParse(InputObj);
  return response.success;
}

module.exports = {inputValidation}
