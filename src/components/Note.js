import React from "react";
import NoteItem from "./NoteItem";
import "./css/note.css";
import { Component } from 'react'
// currentIndex, position as props to NoteItem

export class Note extends Component {
  render() {
    return (
      <div className="notes container">
        {this.props.notes.map((elem, index)=>{
          return <NoteItem note={elem} index={index} key={index}/>;
        })}
    </div>
    )
  }
}

export default Note