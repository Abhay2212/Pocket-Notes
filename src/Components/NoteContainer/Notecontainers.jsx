import React, { useState, useEffect } from "react";
import Style from "./Notecontainers.module.css";
import NoteBgImage from "../../assets/note-bg-img.png";
import LockImage from "../../assets/lock-img.png";
import GroupNotes from "../GroupNotes/Groupnote";

function NoteContainers({
  selectedGroup,
  selectedLogo,
  selectedColor,
}) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // const handleNoteChange = (e) => {
  //   setNewNote(e.target.value);
  // };

  // const handleAddNote = () => {
  //   if (newNote.trim() !== "") {
  //     const updatedNotes = [...notes, newNote];
  //     setNotes(updatedNotes);
  //     localStorage.setItem(
  //       `${selectedGroup}-notes`,
  //       JSON.stringify(updatedNotes)
  //     );
  //     setNewNote("");
  //   }
  // };

  useEffect(() => {
    const storedNotes =
      JSON.parse(localStorage.getItem(`${selectedGroup}-notes`)) || [];
    setNotes(storedNotes);
  }, [selectedGroup, selectedColor]);

  return (
    <div className={Style.noteContainer}>
      {selectedGroup ? (
        <GroupNotes
          groupName={selectedGroup}
          notes={notes}
          logo={selectedLogo}
          color={selectedColor}
        />
      ) : (
        <>
          <div className={Style.noteContainerTop}>
            <img src={NoteBgImage} alt="note-bg-image" />
            <h2>Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className={Style.noteContainerButtom}>
            <img src={LockImage} alt="lock-image" />
            <p>end-to-end encrypted</p>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteContainers;
