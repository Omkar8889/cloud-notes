import React, {useContext, useEffect, useState} from "react";
import NoteItem from "./NoteItem";
import "./css/note.css";
import { Component } from 'react'
import NoteContext from '../context/notes/Notecontext'

function Note() {

  

  const {notes, filterTag}=useContext(NoteContext)
  const [displayedNotes, setDisplayedNotes]=useState([])

  useEffect(() => {
    // Check if the filterTag is 'all Notes'
    if (filterTag === 'all Notes') {
      // If 'all Notes', show all notes without filtering
      setDisplayedNotes([...notes]);
    } else {
      // If not 'all Notes', filter notes based on the tag
      setDisplayedNotes([...notes.filter(item => item.tag === filterTag)]);
    }
  }, [notes, filterTag]);
  return (
  <div className="notes container">
  {displayedNotes.map((elem, index)=>{
    return <NoteItem note={elem} index={index} key={index}/>;
  })}
</div>
  )
}

export default Note

