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

  if (currentLog.length >= 3) {
    
     // Calculate calories
      let getCalories = currentLog.map(logs  => {
        return logs.calories
      })
      var calString2Num = getCalories.map(toNumber);
      let addCalories = calString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgCalories = addCalories / getCalories.length
      roundCalories = Math.floor(avgCalories) 

      // Calculate protien
      let getProtien = currentLog.map(logs  => {
        return logs.protien
      })
      var protString2Num = getProtien.map(toNumber);
      let addProtien = protString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgProtien = addProtien / getProtien.length
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
      let avgCarbs = addCarbs / getCarbs.length
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
      <p className="default-msg">{currentLog.length >= 3 ? 'Your 3 day average' : 'Log atleast 3 notes to see your average'}</p>
     
    </div>
  );
}

export default LoggedAvg;