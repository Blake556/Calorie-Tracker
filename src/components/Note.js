import React from "react";
import { useState } from "react";

function Note(props) {

    const [color, setColor] = useState(true)

    function changeColor() {
        
    }
    


    
  return (
    <tr
      className=""
      style={{ backgroundColor: props.id  % 2 == 0  ? "lightgreen" : "white" }}
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
