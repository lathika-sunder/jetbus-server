const bcrypt=require('bcrypt')
const validatePassword=async(enteredPassword,hashedPassword)=>{
   const result= await bcrypt.compare(enteredPassword,hashedPassword)
   return result;
}

module.exports=validatePassword