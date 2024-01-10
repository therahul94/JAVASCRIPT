const zod = require('zod');

const emailschema = zod.string().email({message: 'Invalid Email Address'})
const pwdschema = zod.string().min(6);

 function isValidInput(username, password){
    const emailRes = emailschema.safeParse(username);
    const pwdRes = pwdschema.safeParse(password);
    // console.log('someamt:<<<<<<<<<<<<<<<<<<<<<<<', emailRes,pwdRes)
    if(!emailRes['success']){
        return emailRes;
    }
    if(!pwdRes['success']){
        return pwdRes;
    }
    return {success: true};

}

module.exports = {isValidInput};

