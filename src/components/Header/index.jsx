import React from "react";
import { useSelector } from "react-redux";

function Header({ setIsEdit }) {
  const user = useSelector((state) => state.user);
  console.log(user);
  const headerStyle = {
    background: `linear-gradient(to bottom, ${user.color}, black)`,
  };
  return (
    <div className="text-white" style={headerStyle}>
      <div className="flex justify-end">
        <button
          className="border rounded-lg mr-3 mt-2 px-3 py-2 font-bold hover:bg-red-400 transition"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      </div>
      <div className="info mt-4 ml-4">
        <img className="w-[150px]" src={user.avaUrl} alt="Avatar" />
        <h3 className="mt-2 mb-2">{user.name}</h3>
        <p>{user.about}</p>
      </div>
    </div>
  );
}

export default Header;
