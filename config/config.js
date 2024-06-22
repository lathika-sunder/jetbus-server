const dotenv=require('dotenv')
dotenv.config()


const configuration={
    app:{
        port:process.env.PORT,
    }
    ,db:{
        uri:process.env.DB_URI,
    },
    jwt:{
        secret_key:process.env.JWT_SECRET_KEY
    }
}
module.exports=configuration