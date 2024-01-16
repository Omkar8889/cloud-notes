import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/Notecontext'
function NoteBody(props) {
  
  const {setNoteToEdit,setEnableNoteEdit}=useContext(NoteContext)
  const handleClick=()=>{
    setNoteToEdit(props.note)
    setEnableNoteEdit(true)
  }
  return (
    <div  onClick={handleClick} >
      <h5 className="card-title">{props.note.title}</h5>
              <p className="card-text my-text">{props.note.discription}</p>
              <p className="card-text my-tag">{props.note.tag}</p>
    </div>
  )
}

export default NoteBody
