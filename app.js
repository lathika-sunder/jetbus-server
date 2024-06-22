const express=require('express')
const app=express()
const config=require('./config/config')
const cors=require('cors')
const cookieParser=require('cookie-parser')


//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())


//Database
const connnection=require('./db/connect')


//Routes
app.get('/',(request,response)=>{
    response.status(200).json("Hello Folks, Welcome to JetBus Server API")
})


const usersRouter=require('./routes/usersRouter')
app.use('/api/v1/user',usersRouter)

const busesRouter=require('./routes/busesRouter')
app.use('/api/v1/bus',busesRouter)

const bookingsRouter=require('./routes/bookingsRouter')
app.use('/api/v1/bookings',bookingsRouter)

const operatorsRouter=require('./routes/operatorsRouter')
app.use('api/v1/operators',operatorsRouter)




app.listen(config.app.port,(request,response)=>{
    console.log(`App listening on http://localhost:${config.app.port}`)
})