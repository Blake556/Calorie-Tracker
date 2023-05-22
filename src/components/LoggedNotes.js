import React from "react";
import "../styles/LoggedNote.css";
import Note from './Note'

function LoggedNotes(props) {

const LogList = props.savedLog
 //console.log(LogList.index)

 const getDate = new Date()

 const options = {
   month: 'long',
   day: 'numeric'
  //  year: 'numeric'
 }

 const date = getDate.toLocaleDateString('em-us', options)
 
  return (
    <div className=" Logged-Notes-container">
      
      { LogList.length === 0  ?  <div>No Notes Logged</div> :
      <table className="">
      <tbody>
        <tr className="table-headers">
          <th>Logged</th>
          <th>Calories</th>
          <th>Protien</th>
          <th>Carbs</th>
          <th>Date</th>
        </tr>
         { LogList.map((newLog, index) => {
                  return (
                    <Note
                      key={index}
                      id={index}
                      calories={newLog.calories}
                      protien={newLog.protien}
                      carbs={newLog.carbs}
                      day={date}
                    />
                  )})
              } 
        </tbody>
      </table>
      }
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
