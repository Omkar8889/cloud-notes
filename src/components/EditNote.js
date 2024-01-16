import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/Notecontext";
import {NOTEACTIONS} from "../context/notes/noteState"
// import "./css/editNote.css";
function EditNote(props) {
  const {setnotes,noteToEdit,setEnableNoteEdit,enableNoteEdit } = useContext(NoteContext);
  const [title, setTitle]=useState(noteToEdit.title)
  const [discription, setdiscription]=useState(noteToEdit.discription)
  const changeTitle=(event)=>{
    setTitle(event.target.value) 
  }
  const changeDiscription=(event)=>{
    setdiscription(event.target.value) 
  }
  // save edited
  const handlesubmit = (e) => {
    e.preventDefault()
    setnotes({type:NOTEACTIONS.EDITNOTE,
      note:{
        ...noteToEdit,
        _id:noteToEdit._id,
      title: document.getElementById("new-title").value,
      discription: document.getElementById("new-text").value
    }
  });
  
  setEnableNoteEdit(false)
  // call add note method to save note
};
//cancle edit 
const handleCancle=()=>{
    setEnableNoteEdit(false)
  }

  return (
    <>
      {<div className="z-1 note position-absolute top-50 container ">
        <form onSubmit={handlesubmit}>
          <input id="new-title" onChange={changeTitle} type="text" value={title} placeholder={noteToEdit.title} />
          <input id="new-text" onChange={changeDiscription} type="text" value={discription} placeholder={noteToEdit.discription} />
          <button type="button" onClick={handleCancle}>cancle</button>
          <button type="submit"> save</button>
        </form>
      </div>}
    </>
  );
}

export default EditNote;
