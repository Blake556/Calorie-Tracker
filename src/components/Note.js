import React from "react";

function Note(props) {

    let bgColor = "white"
  return (
    <tr
      className=""
      style={{ backgroundColor: bgColor ? "lightgreen" : "green" }}
    >
      <td>{props.id + 1}</td>
      <td>{props.calories}</td>
      <td>{props.protien}</td>
      <td>{props.carbs}</td>
      <td>{props.day}</td>
    </tr>
  );
}

export default Note;
