import React from "react";
import "../styles/CreatNote.css";

function CreatNote() {
  return (
    <div className=" create-note-container d-flex justify-content-center align-items-center">
      <form className="">
        <div class="row mb-3 ">
          <label
            for="colFormLabelSm"
            class="col-lg-8 col-form-label col-form-label-lg name-of-input"
          >
            How many calories did you have today?
          </label>
          <div class="col-lg-4">
            <input
              type="number"
              class="form-control form-control-lg text-input"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabel"
            class="col-lg-8 col-form-label-lg protien-input name-of-input"
          >
            How many grams of protien did you have today?
          </label>
          <div class="col-lg-4">
            <input
              type="number"
              class="form-control  form-control-lg text-input"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-lg-8 col-form-label col-form-label-lg name-of-input"
          >
            How many carbs did you have today?
          </label>
          <div class="col-lg-4">
            <input
              type="number"
              class="form-control form-control-lg text-input"
             
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatNote;
