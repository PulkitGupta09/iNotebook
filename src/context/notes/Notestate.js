import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesInitial = [
        {
                "_id": "62bb29b3384b5efe35f9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eadd317a23c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              },
              {
                "_id": "62bb29b3384b5efe35f9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eadd317a23c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              },
              {
                "_id": "62bb29b3384b5efe35f9ce11",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-28T16:17:55.026Z",
                "__v": 0
              },
              {
                "_id": "62bda8cc2eadd317a23c7f7a",
                "user": "62ba90ae3a3767a7d5df718b",
                "title": "PUlkit Gupta",
                "description": "Hello i am pulkit gupta",
                "tag": "about",
                "date": "2022-06-30T13:44:44.787Z",
                "__v": 0
              }
    ]
    const [notes,setNotes] = useState(notesInitial)
return(
<NoteContext.Provider value = {{notes,setNotes}}>
        {props.children};
    </NoteContext.Provider>
)
}

export default NoteState;