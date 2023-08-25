import React from 'react'
import '../styles/LoggedAvg.css';

function LoggedAvg(props) {

  //console.log(props.savedLog)
  let currentLog = props.savedLog

  function toNumber(value) {
    return Number(value);
 }

  let roundCalories;
  let roundProtein;
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
      let getProtein = currentLog.map(logs  => {
        return logs.protein
      })
      var protString2Num = getProtein.map(toNumber);
      let addProtein = protString2Num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      let avgProtein = addProtein / getProtein.length
      roundProtein = Math.floor(avgProtein) 
      console.log(roundProtein)

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
      <h5 className="category">Protein</h5>
      <p className="cal-amount">{roundProtein || '?'}</p>
      <h5 className="category">Carbs</h5>
      <p className="cal-amount">{roundCarbs || '?'}</p>
      <p className="default-msg">{currentLog.length >= 3 ? 'Your 3 day average' : 'Log at least 3 notes to see your average'}</p>
     
    </div>
  );
}

export default LoggedAvg;