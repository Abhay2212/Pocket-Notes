import React, { useState, useEffect } from "react";
import Style from "./Sidebars.module.css";
import AddImage from "../../assets/add-img.png";
import GroupNames from "../GroupNames/Groupname"; 

function Sidebars({ onGroupSelect }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("groups")) || []
  );
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleCreateGroup = (groupData) => {
    const newGroups = [...groups, groupData];
    setGroups(newGroups);
    localStorage.setItem("groups", JSON.stringify(newGroups));
  };

  const handleGroupClick = (group) => {
    onGroupSelect(group.name, group.logo, group.color);
    setSelectedGroup(group.name);
  };

  return (
    <div className={Style.sidebarContainer}>
      <h1>Pocket Notes</h1>
      <div className={Style.createNotesBox}>
        <button onClick={openPopup}>
          <img src={AddImage} alt="add-img" />
          Create Notes Group
        </button>
      </div>
      {isPopupOpen && (
        <GroupNames onClose={closePopup} onCreate={handleCreateGroup} />
      )}

      <div className={Style.createdGroups}>
        <ul>
          {groups.map((group, index) => (
            <li
              key={index}
              style={{ cursor: "pointer",
              background: selectedGroup === group.name ? "#F7ECDC" : "transparent",
              height: selectedGroup === group.name ? "60px" : "50px",
              paddingTop: selectedGroup === group.name ? "5px" : "0px"
             }}
              onClick={() => handleGroupClick(group)}
            >
              <span
                className={Style.circle}
                style={{ background: group.color }}
              >
                {group.logo}
              </span>{" "}
              {group.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebars;
