import React from "react";
import "./List.css";

function List({ children }) {
  return <ul className="List">{children}</ul>;
}

export default List;
