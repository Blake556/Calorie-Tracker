import React from "react";
import { useState } from "react";
import "../styles/CreatNote.css";
import AddIcon from '@mui/icons-material/Add';

function CreatNote(props) {

  const [logNote, setLogNote] = useState({

    calories: '', 
    protien: '',
    carbs: ''
  })

  function handleNewLog(event) {
    const {name, value} = event.target

    setLogNote(prevLog => {
      return {
        ...prevLog, 
        [name]: value 
      }
    })
  }

  function submitNote(event) {
    props.addLog(logNote)
    event.preventDefault();
  } 



  return (
    <div className=" create-note-container d-flex justify-content-center align-items-center">
      <form className="">
        <div className="row mb-3 ">
          <label
            htmlFor="colFormLabelSm"
            className="col-lg-8 col-form-label col-form-label-lg name-of-input"
          >
            How many calories did you have today?
          </label>
          <div className="col-lg-4 ">
            <input
              onChange={handleNewLog}
              type="number"
              className="form-control form-control-lg text-input"
              name="calories"
              value={logNote.calories}
              required
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="colFormLabel"
            className="col-lg-8 col-form-label-lg protien-input name-of-input"
          >
            How many grams of protien did you have today?
          </label>
          <div className="col-lg-4">
            <input
              onChange={handleNewLog}
              type="number"
              className="form-control  form-control-lg text-input"
              name="protien"
              value={logNote.protien}
              required
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="colFormLabelLg"
            className="col-lg-8 col-form-label col-form-label-lg name-of-input"
          >
            How many carbs did you have today?
          </label>
          <div className="col-lg-4">
            <input
              onChange={handleNewLog}
              type="number"
              className="form-control form-control-lg text-input"
              name="carbs"
              value={logNote.carbs}
              required
            ></input>
          </div>
        </div>
        <div className='d-flex justify-content-end'>
        <button className='btn btn-warning' onClick={submitNote}><AddIcon/></button>
        </div>
      </form>
    </div>
  );
}

export default CreatNote;
