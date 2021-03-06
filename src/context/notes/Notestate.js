import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [

  ];
  const [notes, setNotes] = useState(notesInitial);

  // get all Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTkwYWUzYTM3NjdhN2Q1ZGY3MThiIn0sImlhdCI6MTY1NjM5OTE1OX0.Ze25n-vYgkMOPfemXSuGVQtprdDUUdikjAGn6EQtEHk"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTkwYWUzYTM3NjdhN2Q1ZGY3MThiIn0sImlhdCI6MTY1NjM5OTE1OX0.Ze25n-vYgkMOPfemXSuGVQtprdDUUdikjAGn6EQtEHk"
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();
    const note = {
      _id: "62bda8cc2eadd31b7a23c7f7a",
      user: "62ba90ae3a3767a7d5df718b",
      title: title,
      description: description,
      tag: tag,
      date: "2022-06-30T13:44:44.787Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  // Logic to edit in client
  const deleteNote = (id) => {
    // console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTkwYWUzYTM3NjdhN2Q1ZGY3MThiIn0sImlhdCI6MTY1NjM5OTE1OX0.Ze25n-vYgkMOPfemXSuGVQtprdDUUdikjAGn6EQtEHk"
      },
      body: JSON.stringify({title,description,tag}),
    }); 
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes}}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
