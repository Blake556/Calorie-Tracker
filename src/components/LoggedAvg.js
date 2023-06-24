import React from 'react'
import '../styles/LoggedAvg.css';

function LoggedAvg(props) {

  //console.log(props.savedLog)
  let currentLog = props.savedLog

  function toNumber(value) {
    return Number(value);
 }

  let roundCalories;
  let roundProtien;
  let roundCarbs;

  if (currentLog.length >= 7) {
    
     // Calculate calories
      let getCalories = currentLog.map(logs  => {
        return logs.calories
      })
      var calString2Num = getCalories.map(toNumber);
      let addCalories = calString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgCalories = addCalories / 7
      roundCalories = Math.floor(avgCalories) 
      console.log(roundCalories)

      // Calculate protien
      let getProtien = currentLog.map(logs  => {
        return logs.protien
      })
      var protString2Num = getProtien.map(toNumber);
      let addProtien = protString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgProtien = addProtien / 7
      roundProtien = Math.floor(avgProtien) 
      console.log(roundProtien)

      // Calculate carbs
      let getCarbs = currentLog.map(logs  => {
        return logs.carbs
      })
      var carbString2Num = getCarbs.map(toNumber);
      let addCarbs = carbString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgCarbs = addCarbs / 7
      roundCarbs = Math.floor( avgCarbs) 
      console.log(roundCarbs)
    } 

  return (
    <div className="Logged-Avg-container">
      <h4 className="average-title">Average</h4>
      <h5 className="category">Calories</h5>
      <p className="cal-amount">{roundCalories || '?'}</p>
      <h5 className="category">Protien</h5>
      <p className="cal-amount">{roundProtien || '?'}</p>
      <h5 className="category">Carbs</h5>
      <p className="cal-amount">{roundCarbs || '?'}</p>
      <p className="default-msg">Log atleast 7 notes to see average</p>
     
    </div>
  );
}

export default LoggedAvg;