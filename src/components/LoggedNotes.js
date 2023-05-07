import React from "react";
import "../styles/LoggedNote.css";

function LoggedNotes() {
 
  return (
    <div className=" Logged-Notes-container">
      <table className="">
        <tr>
          <th>Logged</th>
          <th>Calories</th>
          <th>Protien</th>
          <th>Carbs</th>
          <th>Date</th>
        </tr>
        <tr className="" style={ { backgroundColor: 'green' ? 'lightgreen' : 'green' }}>
          <td>1</td>
          <td>3,000</td>
          <td>100</td>
          <td>300</td>
          <td>May 4, 2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>9,000</td>
          <td>200</td>
          <td>50</td>
          <td>May 5, 2023</td>
        </tr>
      </table>
    </div>
  );
}

export default LoggedNotes;





{/* <div className="container Logged-Notes-container">
<table className="">
  <tr className="row">
    <th className="col col-1">Results logged</th>
    <th className="col col-3">Calories</th>
    <th className="col col-3">Protien</th>
    <th className="col col-3">Carbs</th>
    <th className="col col-2">Date</th>
  </tr>
  <tr className="row" style={ { backgroundColor: 'green' ? 'lightgreen' : 'green' }}>
    <td className="col col-1">1</td>
    <td className="col col-3">3,000</td>
    <td className="col col-3">100</td>
    <td className="col col-3">300</td>
    <td className="col col-2">May 4, 2023</td>
  </tr>
  <tr className="row">
    <td className="col col-1">2</td>
    <td className="col col-3">9000</td>
    <td className="col col-3">200</td>
    <td className="col col-3">200</td>
    <td className="col col-2">May 5, 2023</td>
  </tr>
</table>
</div> */}
