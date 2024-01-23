import React, { useState , useEffect } from "react";
import Style from "./Groupname.module.css";

function Groupname({ onClose, onCreate }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [groupName, setGroupName] = useState("");
  const [logo, setLogo] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleGroupNameChange = (e) => {
    const newGroupName = e.target.value;
    setGroupName(newGroupName);
    updateLogo(newGroupName);
  };
 
  const updateLogo = (groupName) => {
    const logoLetter = groupName.slice(0, 2).toUpperCase();
    setLogo(logoLetter);
  };

  const handleCreateGroup = () => {
    if (groupName && selectedColor) {
      onCreate({ name: groupName, color: selectedColor, logo });
      onClose();
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateGroup();
    }
  };

  const colorOptions = ["#B38BFA", "#FF79F2", "#F19576", "#43E6FC", "#0047FF", "#6691FF"];

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKeyPress);
    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [handleEnterKeyPress]);

  return (
    <div className={Style.popUp} onClick={onClose}>
      <div
        className={Style.popUpContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Create New Notes Group</h2>
        <div>
          <div className={Style.nameInput}>
            <label htmlFor="group-name">Group Name</label>
            <input
              type="text"
              placeholder="Enter your group name...."
              id="groupName"
              value={groupName}
              onChange={handleGroupNameChange}
            />
          </div>
          <div className={Style.colorInput}>
            <label htmlFor="color">Choose Colour</label>
            <div className={Style.colorOptions}>
              {colorOptions.map((color, index) => (
                <div
                  key={index}
                  className={Style.colorOption}
                  style={{ backgroundColor: color, border: selectedColor === color ? '2px solid white' : 'none' }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>
          <button onClick={handleCreateGroup}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Groupname;
