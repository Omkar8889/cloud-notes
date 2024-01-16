const mongoose= require("mongoose")
const { Schema } = mongoose;
const NotesScema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
    type:String,
    required:true
},
    discription:{
    type:String,
    default:"general"
},
background:{
    type:String,
    default:"white"
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