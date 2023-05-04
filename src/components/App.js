import React from 'react'
import '../styles/App.css';
import Header from './Header'
import CreateNote from './CreateNote'
import LoggedNotes from './LoggedNotes'
import LoggedAvg from './LoggedAvg'
import Footer from './Footer'


function App() {
 
  return (
    <div className="App">

      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-8">
            <CreateNote />
          </div>
          <div className="col col-4">
            <LoggedAvg />
          </div>
        </div>

        <div className="row">
            <LoggedNotes />
        </div>
      </div>
      
     <Footer />

    </div>
  );
}

export default App;
