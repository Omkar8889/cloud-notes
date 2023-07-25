import React,{useContext} from 'react'
import Note from './Note'
import NoteContext from '../context/notes/Notecontext'
function Home() {
  const context=useContext(NoteContext);
  let {notes, updatenotes}=context;
  return (
    <div style={{"display":"flex"}}>
      {notes.map(elem => {
        return(<div key={elem._id} >
      <Note  title={elem.title} discription={elem.discription} tag={elem.tag}/>
      </div>)
        
      })}
     
    </div>
  )
}

export default Home
