const mongoose= require("mongoose")
const { Schema } = mongoose;
const UserScema= new Schema({
    name:{
    type:String,
    required:true
},
    password:{
    type:String,
    required:true
},
    email:{
    type:String,
    required:true,
},
    timestamp:{
    type:Date,
    default:Date.now
}
})
const user=mongoose.model('user', UserScema);
user.createIndexes()
module.exports=user;