import React, {useContext} from 'react'
import NoteContext from "../context/notes/Notecontext";
import {NOTEACTIONS} from "../context/notes/noteState";
import './css/Minimenu.css'
function MiniMenu(props) {
    const {note, miniMenu}=props
    const { setnotes} = useContext(NoteContext);
    const makeCopy=()=>{
      console.log('in mini')
      setnotes({type:NOTEACTIONS.ADDNOTE, note:{...note, '_id':note._id+'1'}})
      console.log('call nantrcha clg')
    }
    const copyToClipbord=async()=>{
        let msg=`Title:${note.title} discription:${note.discription}`
        await navigator.clipboard.writeText(msg);
    }
  return (
    <div className={`MiniMenu ${miniMenu?'display-block':''} `}>
      <ul>
        <li onClick={makeCopy}>copy note</li>
        <li onClick={copyToClipbord}>copy to clipbord</li>
      </ul>
    </div>
  )
}

export default MiniMenu
