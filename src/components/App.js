import React from 'react'
import { useState } from "react";
import '../styles/App.css';
import Header from './Header'
import CreateNote from './CreateNote'
import LoggedNotes from './LoggedNotes'
import LoggedAvg from './LoggedAvg'
import Footer from './Footer'


function App() {
  const [saveLog, setSaveLog] = useState([])

  function addLog(log) {
  
    saveLog.push(log)
    setSaveLog([...saveLog])
    //console.log(saveLog.length)
  }

  return (
    <div className="App ">

      <Header />

      <div className="container app-body">
        <div className="row d-flex justify-content-center">
          <div className="components-containers col col-xl-7 col-lg-8 col-md-8 col-sm-12 col-12">
            <CreateNote addLog={addLog}/>
          </div>
          <div className="components-containers col col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
            <LoggedAvg savedLog={saveLog} addLog={addLog} />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <LoggedNotes 
              savedLog={saveLog} 
            />
          </div>
        </div>
      </div>

     <Footer />

    </div>
  );
}

export default App;
