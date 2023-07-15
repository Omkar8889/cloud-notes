const mongoose= require('mongoose');
const mongoURI="mongodb://localhost:27017/cloudnotes";

const connectTOMongo= async()=>{
   await mongoose.connect(mongoURI)
        console.log("connected to mongoose successfully")
}
module.exports= connectTOMongo;