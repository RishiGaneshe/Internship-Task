const express= require('express')
const cors= require('cors')
const path= require('path')
const { connectToMongoDB } = require('./services/connection.js')
const Routes1= require('./routes/get.routes.js')
const Routes2= require('./routes/post.routes.js')


const app= express()
const PORT= 7000

const DATABASE_URL='mongodb://localhost:27017/secondInterS' 


async function connectDatabase(){
    try{
        await connectToMongoDB(DATABASE_URL)
        console.log('MongoDB connected.');
    }catch(err){
        console.log("Error in connecting database",err)
     }
  }
connectDatabase();


app.set("view engine","ejs");                              
app.set("views",path.join(__dirname,'views'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false}))


app.use("/", Routes2)


app.listen(PORT,()=>{console.log(`Server Started On ${PORT}`) })