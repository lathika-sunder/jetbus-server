const jwt = require('jsonwebtoken');
const config = require('../config/config');
const SECRET_KEY = config.jwt.secret_key;

const generateToken = (id, email) => {
    
    try {
        const token = jwt.sign(
            {
                id: id,
                email: email,
               
            },
            SECRET_KEY,
            { expiresIn: '30m' }
        );
        return token;
    } catch (error) {
        console.log("Error generating access token",error)
    }
    
   
};

module.exports = generateToken;
