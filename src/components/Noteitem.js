import React from "react";
import notecontext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className = "col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
            {note.description}
          </p> 
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
