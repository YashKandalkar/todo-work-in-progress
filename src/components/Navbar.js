import React from "react";

const Navbar = () => {
  return (
    <nav
      className={`flex flex-row bg-primary text-gray-50 h-12 items-center 
            justify-between px-8
        `}
    >
      <h2 className="text-2xl">To Do</h2>
      <button className="bg-secondary text-gray-900 px-2 py-1 rounded-sm">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
