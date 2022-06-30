import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesInitial = [
        {
                "_id": "62bb29b3384b5efea35f9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eadd3v17a23c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              },
              {
                "_id": "62bb29b338h4b5efe35f9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eaddw317a23c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              },
              {
                "_id": "62bb29b3384b5efe35yf9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eadd317a2a3c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              }
    ]
    const [notes,setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title,description,tag)=>{
        const note = {
            "_id": "62bda8cc2eadd31b7a23c7f7a",
            "user": "62ba90ae3a3767a7d5df718b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-06-30T13:44:44.787Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = ()=>{
        
    }
    // Edit a Note
    const editNote = ()=>{
        
    }
return(
<NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
        {props.children};
    </NoteContext.Provider>
)
}
 
export default NoteState;