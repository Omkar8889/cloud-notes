import React, {useContext, useEffect, useState} from 'react'
import NoteContext from '../context/notes/Notecontext'

function Tags() {
    const {notes, setFilter}=useContext(NoteContext);
    const [uniqueTags, setUniqueTags] = useState(['all Notes']);
    const [activeTag, setActiveTag]=useState('all Notes')
    useEffect(() => {
      // Use Set to store unique tags
      const uniqueTagsSet = new Set();
  
      // Loop through notes and add each tag to the Set
      for (let i = 0; i < notes.length; i++) {
        uniqueTagsSet.add(notes[i].tag);
      }
  
      // Convert the Set to an array and update the state
      setUniqueTags(['all Notes', ...uniqueTagsSet]);
    }, [notes]);
    
  return (<>
  {!!notes.length && uniqueTags.map((tag) => (
    <div key={tag} className={activeTag==tag?'selected':''} onClick={() => {setFilter(tag); setActiveTag(tag)}}>
      <p>{tag}</p>
    </div>
  ))}
  </>
  )
}

export default Tags
