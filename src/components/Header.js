import React from 'react'
import '../styles/Header.css';



function Header() {
  const getDate = new Date()

  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }

  const date = getDate.toLocaleDateString('em-us', options)

  //console.log(date)

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-9 header-container ">
          <div className="header text-success  ">
            <h1 className="display-4 ">Calorie Tracker</h1>
          </div>
          
          <div className=" current-date">
            <h4 className=" display-6 date-header">{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
