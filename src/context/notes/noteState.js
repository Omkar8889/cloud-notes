import React, {useReducer, useRef, useState} from 'react'
import NoteContext from './Notecontext'

export const NOTEACTIONS={
  ADDNOTE:'addnote',
  COPYNOTE:'copynote',
  EDITNOTE:'editnote',
  DELETENOTE:'deletenote',
  FIRSTPULL:'firstpull'
}

const NoteState=(props)=>{
  const [userToken, setUserToken]=useState()
  const [notes, setnotes]=useReducer(noteActions, {}); //reducer eclaration for note 
  const [noteToEdit, setNoteToEdit]=useState()
  const [enableNoteEdit, setEnableNoteEdit]=useState(false)
  const [filterTag, setFilter]=useState('all Notes') // filter tag for side menu filter
  const [loggedIn, setLoggedIn]=useState(false) // login status



  async function postData(url, note, type, userToken) {
    let host="http://localhost:5000/";
    let fetchURL=host + url;
    console.log(userToken)
    const response = await fetch(fetchURL, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "auth-token":userToken
      },
      body: JSON.stringify(note), 
    });
    let newnotes= await pullNotes(userToken);
          setnotes({type:NOTEACTIONS.FIRSTPULL,notes:newnotes})
  }
  //pull request for all notes with user id
  
  const pullNotes=async(userToken)=>{
    const responce=await fetch('http://localhost:5000/api/Notes/fetchallnotes',{
      method:"GET",
      headers:{
        "auth-token":userToken
      }}
    ).then(responce=>responce.json())
   return responce;
  }
  const pullUser=async(email, pass, actionType)=>{
    const response=await fetch(`http://localhost:5000/api/auth/${actionType}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'email':email,'password':pass}),
    }).then(responce=>responce.json())
    return response
  }
  //note actions for notes =>  reducer dispatch function
  function noteActions(currentState, action){
    switch(action.type){
      case NOTEACTIONS.ADDNOTE:
        postData(`api/Notes/storenotes`, action.note, 'POST', userToken) //API call for update note
        // TO DO: make api call to add newNote to database
        return currentState.concat(action.note);
        
        case NOTEACTIONS.EDITNOTE:
          console.log(action.note._id)
          console.log(action.note)
        postData(`api/Notes/updatenote/${action.note._id}`, action.note,'PUT', userToken) //API call for update note
      
        const index=currentState.findIndex(item => item._id === action.note._id)
        let updatedArray = [...currentState];
        updatedArray[index] =action.note
        return updatedArray;
        
      case NOTEACTIONS.DELETENOTE:
        postData(`api/Notes/deletenode/${action.note._id}`, action.note,'DELETE', userToken)// TO DO : call api and update database
        
      case NOTEACTIONS.FIRSTPULL:
        if(action.notes){
          return action.notes;
        }else{
          return [
            {
              "_id": "659d1643d5cd6555b81f87af",
              "user": "64b60c8c6518a96a7ccb6578",
              "title": "no notes available ",
              "discription": "creater new notes",
              "background": "white",
              "tag": "notes",
              "timestamp": "2024-01-09T09:47:47.094Z",
              "__v": 0
            }
          ]
        }
      }
      }

 
    return (
        <NoteContext.Provider value={{notes,setnotes,
        filterTag,setFilter,
        loggedIn,setLoggedIn,
        noteToEdit,setNoteToEdit,
        enableNoteEdit, setEnableNoteEdit,setUserToken,
        pullNotes,pullUser}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;