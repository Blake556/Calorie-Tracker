import React from 'react'
import '../styles/LoggedAvg.css';

function LoggedAvg() {
  return (
    <div className="Logged-Avg-container">
      <h3 className="average-title">Average</h3>
      <h4>Calories</h4>
      <p className="cal-amount">2,500</p>
      <h5>Protien</h5>
      <p>?</p>
      <h5>Carbs</h5>
      <p>?</p>
      <p>Log atleast 7 notes to see average</p>
     
    </div>
  );
}

export default LoggedAvg;