import NoteContext from '../context/notes/Notecontext'
import './css/note.css'
import React,{ Component } from 'react'
// {note, updateIndex,currentIndex, position,updateColumnHeight,loadNextComponent}
export class NoteItem extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isHovered: false
  };
}
handleMouseEnter = () => {
  this.setState({ isHovered: true });
};

handleMouseLeave = () => {
  this.setState({ isHovered: false });
};
  render() {

    return (
    <div className='note-item'  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
    <div className={`card my-2 ${this.state.isHovered?'Hoverd-Note':''} `} style={{backgroundColor:`${this.props.note.background}`}}>
    <div className="card-body small-card">
      <h5 className="card-title">{this.props.note.title}</h5>
      <p className="card-text my-text">{this.props.note.discription}</p>
      <div className={`d-flex justify-content-around operation-buttons ${this.state.isHovered?'show-keys':'hide-keys'}`}>
      <div ><i className="fa-solid fa-trash "></i></div>
      <div ><i className="fa-solid fa-palette"></i></div>
      <div ><i className="fa-solid fa-pen-to-square"></i></div>
      <div ><i className="fa-solid fa-floppy-disk"></i></div>
      </div>
    </div>
  </div>
  </div>
    )
  }
}

export default NoteItem
