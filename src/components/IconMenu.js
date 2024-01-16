import React, {useState,useContext} from 'react'
import NoteContext from "../context/notes/Notecontext";
import {NOTEACTIONS} from "../context/notes/noteState";

function IconMenu(props) {
    let colors=['white','red','blue','green','#faafa8','#f39f76']// colors for note background
    const {index,toggleminiMenu,note }=props
    const {setnotes} = useContext(NoteContext);



    const [colorMenu, setcolorMenu]=useState(false)
    const toggleColor = () => {
        setcolorMenu(!colorMenu);
        document.body.addEventListener('click', removecolorMenu)
    };
    const removecolorMenu=(e)=>{
        if(e.target!='form' && e.target.id!=`colorPalette${index}`){setcolorMenu(false);
        document.body.removeEventListener('click', removecolorMenu)}
    }
    const changeBGColour=(e)=>{
      setnotes({type:NOTEACTIONS.EDITNOTE, note:{...note,'background':e.target.value}})
    }
    const handleTrash=()=>{
      setnotes({type:NOTEACTIONS.DELETENOTE,note:{'_id':note._id}})
    }

  return (
    <>
      <div className={`d-flex justify-content-around operation-buttons note-buttons ${colorMenu ? "show-keys" : ""}`}>
                <div className="note-key"><i className="fa-solid fa-trash " onClick={handleTrash}></i></div>
                <div className="note-key"><i className="fa-solid fa-palette" id={`colorPalette${index}`} onClick={toggleColor}></i></div>
                <div className="note-key" ><i className="fa-solid fa-pen-to-square"></i></div>
                <div className="note-key"><i className="fa-solid fa-floppy-disk"></i></div>
                <div className="note-key"onClick={toggleminiMenu}><i className="fa-solid fa-bars" id={`colormenu${index}`} ></i></div>
              </div>
              <div className={`my-colors ${colorMenu ? "display-block" : ""}`}>
                <form>
                {colors.map((color)=>{// using map to load radio inputs for all elements of colors array
                    return (<>
                    <input type="radio" name="bg-color" value={color} onChange={changeBGColour} checked={note.background===color} id={`${color}${index}`} />
                    <label
                     htmlFor={`${color}${index}`}
                     style={{ backgroundColor: color }}
                    ></label>
                    </>)
                  })}
                </form>
              </div>
    </>
  )
}

export default IconMenu
