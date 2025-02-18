import React from 'react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`lg:w-64 w-full bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative z-50`}
    >
      <h2 className="text-2xl font-semibold mb-4">Chat App</h2>
      <ul>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Chats</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Groups</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
