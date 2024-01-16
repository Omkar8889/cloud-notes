import React,{useContext, useState} from 'react'
import Note from './Note'
import NoteContext from '../context/notes/Notecontext'

import Menu from './Menu';
import NewNote from './NewNote';
import FrontPage from './FrontPage';
import EditNote from './EditNote';

function Home() {
  const {notes,loggedIn,enableNoteEdit}=useContext(NoteContext);
  return (
  <div className={loggedIn?'d-flex':'container'}>
    {enableNoteEdit && <EditNote/>}
    {loggedIn?<>
    <Menu notes={notes}/>
    <div className='container'>
    <NewNote/>
    <Note notes={notes} />
    </div>
    </>:<FrontPage/>}
      
  </div>
  )
}
export default Home
