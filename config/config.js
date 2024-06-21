const dotenv=require('dotenv')
dotenv.config()


const configuration={
    app:{
        port:process.env.PORT,
    }
    ,db:{
        uri:process.env.DB_URI,
    }
}
module.exports=configuration