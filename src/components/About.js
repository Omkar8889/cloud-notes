import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/Notecontext';
function About() {
  const a=useContext(NoteContext);
  useEffect(()=>{
    setTimeout(() => {
      a.updateUser();
    }, 2000);
    // eslint-disable-next-line
  },[])
  return (
    <div>
      {console.log(a.User.name)}
      {console.log(a.User.id)}

      <p>thsi is about</p>
    </div>
  )
}

export default About
