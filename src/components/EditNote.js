import React, { useContext } from "react";
import NoteContext from "../context/notes/Notecontext";
import "./css/editNote.css";
function EditNote() {
  const { newNote, toggleEdit, addNote } = useContext(NoteContext);
  // do nothing when cancaled
  const handlecancal = () => {
    toggleEdit(false, { _id: null });
  };

  // save edited or new note
  const handlesubmit = () => {
    toggleEdit(false, { _id: null });
    addNote({
      _id: newNote._id == null ? "" : newNote._id,
      title: document.getElementById("new-title").value,
      discription: document.getElementById("new-text").value,
      tag: document.getElementById("new-tag").value
    });
    // call add note method to save note
  };

  return (
    <div className="note position-fixed top-50 container ">
      <div className="note-body">
        <input
          className="note-title"
          id="new-title"
          defaultValue={newNote.title}
        ></input>
        <input
          className="note-text"
          id="new-text"
          defaultValue={newNote.discription}
        ></input>
        <div className="note-buttons d-flex justify-content-evenly">
          <select  id="new-tag">
            <option selected>{newNote.tag}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button onClick={handlecancal}>cancal</button>
          <button onClick={handlesubmit}>save</button>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
