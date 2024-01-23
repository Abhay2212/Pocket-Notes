import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebars";
import NoteContainer from "./Components/NoteContainer/Notecontainers";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);   

  const handleGroupSelection = (groupName, logo, color) => {
    setSelectedGroup(groupName);
    setSelectedLogo(logo);
    setSelectedColor(color); 
  };

  return (
    <div className="App">
      <Sidebar onGroupSelect={handleGroupSelection} />
      <NoteContainer
        selectedGroup={selectedGroup}
        selectedLogo={selectedLogo}
        selectedColor={selectedColor}
      />
    </div>
  );
}

export default App;
