import React, { useState,useRef,useEffect, useContext } from 'react'
import './css/NewNote.css'
import NoteContext from '../context/notes/Notecontext';
import {NOTEACTIONS} from '../context/notes/noteState'
function NewNote() {

const { setnotes } = useContext(NoteContext);
const [newNote, setNewNote] = useState(false);
const inputRef = useRef(null);
const [newCount, setNewCount]=useState(0)
// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');
// const [tags, setTags] = useState('');

const handleTitleChange = (event) => {
  // setTitle(event.target.value);
};

const handleDescriptionChange = (event) => {
  // setDescription(event.target.value);
};

const handleTagsChange = (event) => {
  // setTags(event.target.value);
};

const showInput = () => {
  setNewNote(true);
  document.getElementById('description').addEventListener('input', autoExpand);
  document.body.addEventListener('click', hideInput);
};

const hideInput = (e) => {
  // Check if the click target is not the input
  if (!inputRef.current || !inputRef.current.contains(e.target)) {
    setNewNote(false);
    // Adding new note in currently displayed notes
    let title=document.getElementById('title')
    let description=document.getElementById('description')
    let tags=document.getElementById('tags')
    if(title.value!=='' || description.value!==''){
      console.log('setting new note')
      setnotes({
      type: NOTEACTIONS.ADDNOTE,
      note: {
        'title': title.value,
        'discription': description.value,
        'tag': tags.value,
      },
    });}
    // Remove all text from all input elements
    title.value=''
    description.value=''
    tags.value=''
    setNewCount(newCount+1)
  }
};
useEffect(()=>{
  document.getElementById('description').removeEventListener('input', autoExpand);
  document.body.removeEventListener('click', hideInput);
},[newCount])
function autoExpand() {
  // Set the textarea height to its scrollHeight
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}
return (
  <div  className='inputNote'>
    <form ref={inputRef} className='container' action="">
      <div className={newNote ? 'new-content' : 'hide-content'}>
        <input
          type="text"
          name='Title'
          id="title"
          onChange={handleTitleChange}
          placeholder='Title'
        />
      </div>
      <div className='new-content'>
        <textarea
        
          type="text"
          onClick={showInput}
          id="description"
          name="description"
          onChange={handleDescriptionChange}
          placeholder='Take a note'
        />
      </div>
      <div className={newNote ? 'new-content' : 'hide-content'}>
        <input
          type="text"
          id="tags"
          name="tags"
          onChange={handleTagsChange}
          placeholder='add tag'
        />
      </div>
    </form>
  </div>
);
}

export default NewNote
