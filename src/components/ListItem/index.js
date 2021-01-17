import React from "react";
import "./ListItem.css";

function ListItem({
  children,
  id = null,
  onDelete = () => {},
  onEdit = () => {},
}) {
  return (
    <li className="flex ListItem justify-between">
      <div>{children}</div>
      <div className="flex">
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default ListItem;
