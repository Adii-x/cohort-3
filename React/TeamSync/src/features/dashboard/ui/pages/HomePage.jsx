import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={changeTheme}
        className="px-4 py-2 bg-blue-500 cursor-pointer"
      >
        Chnage Theme
      </button>
    </div>
  );
};

export default HomePage;
