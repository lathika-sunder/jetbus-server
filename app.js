const express=require('express')
const app=express()
const config=require('./config/config')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const router=express.Router()


//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())


//Database
const connnection=require('./db/connect')


//Routes
app.get('/api/v1/jetbus/',(request,response)=>{
    response.status(200).json("Hello Folks, Welcome to JetBus Server API")
})


const usersRouter=require('./routes/usersRouter')
app.use('/api/v1/jetbus/user',usersRouter)

const busesRouter=require('./routes/busesRouter')
app.use('/api/v1/jetbus/bus',busesRouter)

const bookingsRouter=require('./routes/bookingsRouter')
app.use('/api/v1/jetbus/booking',bookingsRouter)


app.get('/',(request,response)=>{
    response.status(200).json({message:"Hey welcome to Jetbus Api"})
})


//cron initiated bookings
const cronInitiatedOrders = require('./utils/cronInitiatedOrders')
app.use('/api/v1/jetbus/cron',router.get('/',cronInitiatedOrders))

app.listen(config.app.port,(request,response)=>{
    console.log(`App listening on http://localhost:${config.app.port}`)
})

