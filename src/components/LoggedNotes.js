import React from "react";
import "../styles/LoggedNote.css";

function LoggedNotes() {
  //let changecolor = 
  return (
    <div className="Logged-Notes-container">
      <table className="">
        <tr>
          <th>Calories</th>
          <th>Protien</th>
          <th>Carbs</th>
        </tr>
        <tr className="" style={{ backgroundColor:  'lightgreen' }}>
          <td>3,000</td>
          <td>100</td>
          <td>300</td>
        </tr>
        <tr>
          <td>9000</td>
          <td>200</td>
          <td>50</td>
        </tr>
      </table>
    </div>
  );
}

export default LoggedNotes;
