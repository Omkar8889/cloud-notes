import React,{useContext} from 'react'
import Note from './Note'
import NoteContext from '../context/notes/Notecontext'
import EditNote from './EditNote';
import Menu from './Menu';
function Home() {
  const context=useContext(NoteContext);
  const {notes, edit, updatenotes}=context;
  return (<div className='d-flex '>
      <Menu/>
      <Note notes={notes}/>
      </div>
  )
}

export default Home
