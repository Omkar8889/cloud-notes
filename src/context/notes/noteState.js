import React, {useState} from 'react'
import NoteContext from './Notecontext'

const NoteState=(props)=>{
    const userNotes=[ {
      "_id": "64bfc0d9697b35eaa0c69f42",
      "user": "64b60c8c6518a96a7ccb6578",
      "title": " first ",
      "discription": "for tstfor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete noteing delete note",
      "tag": "test note",
      "timestamp": "2023-07-25T12:32:25.694Z",
      "background":"white",
      "__v": 0
    },{
      "_id": "64bfc0d9697b35eaa0c69f42",
      "user": "64b60c8c6518a96a7ccb6578",
      "title": " 2 ",
      "discription": "for tsting delete note",
      "tag": "test note",
      "timestamp": "2023-07-25T12:32:25.694Z",
      "background":"white",
      "__v": 0
    },{
      "_id": "64bfc0d9697b35eaa0c69f42",
      "user": "64b60c8c6518a96a7ccb6578",
      "title": " 3 ",
      "discription": "for tstifor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete notefor tsting delete noteng delete note",
      "tag": "test note",
      "timestamp": "2023-07-25T12:32:25.694Z",
      "background":"white",
      "__v": 0
    },{
      "_id": "64bfc0d9697b35eaa0c69f42",
      "user": "64b60c8c6518a96a7ccb6578",
      "title": " 4 ",
      "discription": "for tsting delete note",
      "tag": "test note",
      "timestamp": "2023-07-25T12:32:25.694Z",
      "background":"white",
      "__v": 0
    },{
      "_id": "64bfc0d9697b35eaa0c69f42",
      "user": "64b60c8c6518a96a7ccb6578",
      "title": " 11 ",
      "discription": "for tsting delete note",
      "tag": "test note",
      "timestamp": "2023-07-25T12:32:25.694Z",
      "background":"white",
      "__v": 0
    }
  ]
      // newNote is note variable for adding new note and editing note from editNote
      const [newNote, setnewNote]=useState("") 

            // add new note to DB
      const addNote=async(note)=>{
        // TO-DO: add note from props to DB 
        // await adding process
        
        console.log("in add note " +note.title)
        console.log("in add note " +note.tag)
        console.log("in add note " +note._id+ " is id")
        console.log("in add note " +note.discription)
        setedit(false)
      }

      // delete note to DB
      const deleteNote=(_id)=>{
        // TO-DO:delete note with this id
        
      }

    const [edit ,setedit]=useState(false)
    const toggleEdit=(activateEdit,newNote)=>{
      if(newNote._id===null){
        newNote={
          title:"add title",
          discription:"add discription",
          tag:"add tag"
        }
      }
      setedit(activateEdit)
      if(activateEdit==true){
        setnewNote(newNote)
      }
    }
    
    const [notes, setnotes]=useState(userNotes);
   
    return (
        <NoteContext.Provider value={{notes,edit,newNote, toggleEdit, addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;