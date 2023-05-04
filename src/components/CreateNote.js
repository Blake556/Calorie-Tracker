import React from 'react'
import '../styles/CreatNote.css';

function CreatNote() {
  return (
    <div className="create-note-container">
      <form>
        <div className='container row'>
            <div className='col-12'>
                <div className='labels'>
                    <label>Calories</label>
                </div>
                <input></input>
            </div>
            <div className='col-12'>
                <div className='labels'>
                    <label>Protien</label>
                </div>
                <input></input>
            </div>
            <div className='col-12'>
                <div className='labels'>
                    <label>Carbs</label>
                </div>
                <input></input>
            </div>
        </div>
      </form>
     
    </div>
  );
}

export default CreatNote;