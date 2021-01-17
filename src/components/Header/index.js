import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between Header">
      <div>Simple App</div>
      <div className="flex">
        <div style={{ padding: "10px" }}>
          <Link to="/">Todo List</Link>
        </div>
        <div style={{ padding: "10px" }}>
          <Link to="/type-writter">Type Writter</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
