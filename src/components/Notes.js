 import React,{useContext}  from 'react'
import noteContext from "../context/notes/NoteContext"
import NoteItem from "./Noteitem"


function Notes() {
    const context = useContext(noteContext);
    const {notes,setNotes} = context;
  return (
    <div className="row my-3">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
     return <NoteItem note = {note}/>;
    })}
</div>  
  )
}

export default Notes

