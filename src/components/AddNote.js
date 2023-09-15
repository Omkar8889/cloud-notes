import React,{useContext} from 'react'
import NoteContext from '../context/notes/Notecontext'
function AddNote() {
    const {toggleEdit, edit} =useContext(NoteContext)
    const handleclick=()=>{
      let note={
        title:"add title",
        discription:"add discription",
        tag:"add tag"
      }
      if(!edit){
      toggleEdit(true,note)}
    }
  return (<div className="col-md-4" onClick={handleclick} >
  <div className="card my-2" >
  <i className="fa-regular fa-square-plus fa-2xl my-4"></i>
  <p>Add New Note</p>
</div> 
</div>
  )
}

export default AddNote
