import React from "react";


function Note(props) {

const LogList = props.savedLog
 //console.log(LogList.index)
 
  return (
    <div>
            <tr className="" style={ { backgroundColor: 'green' ? 'lightgreen' : 'green' }}>
              <td>{props.id}</td>
              <td>{props.calories}</td>
              <td>{props.protien}</td>
              <td>{props.carbs}</td>
            </tr>
        
      
    </div>
  );
}

export default Note;