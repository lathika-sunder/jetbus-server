const bcrypt = require('bcryptjs')
const hashPassword = (password) => {
    try {
        const salt =bcrypt.genSaltSync(10)
        const hashedPassword =bcrypt.hashSync(password, salt)
        return hashedPassword
    } catch (error) {
        console.log("Error hashing Password",error)
    }

}
module.exports=hashPassword