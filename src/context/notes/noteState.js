import React, {useState} from 'react'
import NoteContext from './Notecontext'

const NoteState=(props)=>{
    const userNotes=[
        {
          "_id": "64bfc0d9697b35eaa0c69f42",
          "user": "64b60c8c6518a96a7ccb6578",
          "title": " first ",
          "discription": "for tsting delete note",
          "tag": "test note",
          "timestamp": "2023-07-25T12:32:25.694Z",
          "__v": 0
        },
        {
          "_id": "64bfc0da697b35eaa0c69f45",
          "user": "64b60c8c6518a96a7ccb6578",
          "title": " not first ",
          "discription": "for tsting delete note",
          "tag": "test note",
          "timestamp": "2023-07-25T12:32:26.118Z",
          "__v": 0
        },
        {
          "_id": "64bfc0da697b35eaa0c69f48",
          "user": "64b60c8c6518a96a7ccb6578",
          "title": " not first ",
          "discription": "for tsting delete note",
          "tag": "test note",
          "timestamp": "2023-07-25T12:32:26.611Z",
          "__v": 0
        }
      ]
    const [notes, setnotes]=useState(userNotes);
    const updatenotes=()=>{
        setnotes({
            "name":"not omkar",
            "id":"R12"
        })
    }
    return (
        <NoteContext.Provider value={{notes, updatenotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;