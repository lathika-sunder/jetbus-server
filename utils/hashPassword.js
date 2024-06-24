const bcryptjs = require('bcryptjs')
const hashPassword = (password) => {
    try {
        const salt =bcryptjs.genSaltSync(10)
        const hashedPassword =bcryptjs.hashSync(password, salt)
        return hashedPassword
    } catch (error) {
        console.log("Error hashing Password",error)
    }

}
module.exports=hashPassword