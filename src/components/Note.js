import React from 'react'
import './note.css'
function Note(props) {
    
  return (
    <div className="my-card card text-bg-primary mb-3" style={{"max-width": "18rem"}}>
  <div className="card-header my-header">{props.tag}</div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.discription}</p>
  </div>
</div>

  )
}

export default Note
