import React, { useState, useEffect } from "react";
import Style from "./Groupnote.module.css";
import AddNotesButton from "../../assets/add-note-buttton.png";

function Groupnote({ groupName, logo, color }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const timestamp = new Date();
      const formattedTime = timestamp.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formattedDate = timestamp.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const updatedNotes = [
        ...notes,
        {
          formattedTime,
          formattedDate,
          newNote,
        },
      ];
      setNotes(updatedNotes);
      localStorage.setItem(groupName, JSON.stringify(updatedNotes));
      setNewNote("");
    }
  };

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(groupName)) || [];
    setNotes(storedNotes);
  }, [groupName]);

  return (
    <div className={Style.noteContainer}>
      <div className={Style.noteContainerTop}>
        <span style={{ backgroundColor: color }}>{logo}</span>
        <h2>{groupName}</h2>
      </div>
      <div className={Style.noteContainerMiddle}>
        {notes.map((note, index) => (
          <div key={index} className={Style.middleBox}>
            <div className={Style.timeDate}>
              <p>{note.formattedTime}</p>
              <p>{note.formattedDate}</p>
            </div>
            <div className={Style.notes}>
              <p>{note.newNote}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={Style.noteContainerBottom}>
        <textarea
          placeholder="Enter your text here..........."
          value={newNote}
          onChange={handleNoteChange}
        ></textarea>
        <button>
          <img src={AddNotesButton} alt="Add Note" onClick={handleAddNote} />
        </button>
      </div>
    </div>
  );
}

export default Groupnote;
