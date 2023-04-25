import React from "react";
import Navbar from "../Navbar/Navbar"
import AddUser from "./AddUser"
import Chats from "../Chatbox/Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <AddUser/>
      <Chats/>
    </div>
  );
};

export default Sidebar;