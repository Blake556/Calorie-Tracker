import React from "react";


function Note(props) {

const LogList = props.savedLog
 //console.log(LogList.index)
 
  return (
    <div>
        {LogList.map((log, index) => {
          return (
            <tr className="" style={ { backgroundColor: 'green' ? 'lightgreen' : 'green' }}>
              <td>{log.length}</td>
              <td>{log.calories}</td>
              <td>{log.protien}</td>
              <td>{log.carbs}</td>
              <td>{}</td>
            </tr>
          )})
        }
    </div>
  );
}

export default Note;