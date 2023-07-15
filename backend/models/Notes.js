const mongoose= require("mongoose")

const NotesScema= new Schema({
    title:{
    type:String,
    required:true
},
    discription:{
    type:String,
    default:"general"
},
    tag:{
    type:String,
   
},
    timestamp:{
    type:Date,
    default:Date.now
}
})

module.exports=mongoose.model('Notes', NotesScema)