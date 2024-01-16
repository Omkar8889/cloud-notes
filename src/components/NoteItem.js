import React, { useState,useContext } from "react";
import NoteContext from "../context/notes/Notecontext";
import IconMenu from "./IconMenu";
import MiniMenu from "./MiniMenu";
import "./css/note.css";
import NoteBody from "./NoteBody";
function NoteItem(props) {
  
  const [miniMenu, setminiMenu]=useState(false)
  const toggleminiMenu = () => {
    setminiMenu(!miniMenu);
    document.body.addEventListener('click', removeminiMenu)
  };
  const removeminiMenu=(e)=>{
    if(e.target.class!=`MiniMenu` && e.target.id!=`colormenu${props.index}`){setminiMenu(false);
    document.body.removeEventListener('click', removeminiMenu)}
  }
  
  
  return (
      <>
        <div id={`note${props.index}`} className="note-item" >
          <div className='card my-2' style={{ backgroundColor: `${props.note.background}` }}>
            <div className="card-body small-card p-relative">
              <NoteBody note={props.note}/>
              <IconMenu index={props.index} note={props.note} toggleminiMenu={toggleminiMenu} background={props.note.background}/>
              <MiniMenu key={props.note._id} note={props.note} miniMenu={miniMenu}/>
            </div>
          </div>
        </div>
      </>
    );
  }
export default NoteItem