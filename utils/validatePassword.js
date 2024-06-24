const bcrypt=require('bcryptjs')
const validatePassword=(enteredPassword,hashedPassword)=>{
   const result= bcrypt.compareSync(enteredPassword,hashedPassword)
   return result;
}

module.exports=validatePassword