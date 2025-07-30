import React from 'react';
import './App.css';
import officeImage from './office.jpg'; 

function App() {

  const heading = "Office Space";

  
  const singleOffice = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };


  const officeList = [
    { Name: "CTS", Rent: 50000, Address: "Chennai" },
    { Name: "PUMA", Rent: 65000, Address: "Bangalore" },
    { Name: "AFFORD", Rent: 55000, Address: "Pune" },
  ];

  
  const getRentClass = (rent) => {
    return rent <= 60000 ? "textRed" : "textGreen";
  };

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>

 
      <img src={officeImage} width="25%" height="25%" alt="Office Space" />

      <div className="office-list">
        {officeList.map((office, index) => (
          <div key={index} className="office-card">
            <h2>Name: {office.Name}</h2>
            <h3 className={getRentClass(office.Rent)}>Rent: ₹{office.Rent}</h3>
            <h4>Address: {office.Address}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
