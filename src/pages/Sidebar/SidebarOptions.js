import React from "react";
import "./SidebarOptions.css";
const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div>
      <div className={`sidebarOptions ${active && "sidebarOptions_active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SidebarOptions;
