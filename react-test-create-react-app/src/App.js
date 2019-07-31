import React from 'react';
import CitiesList from './CitiesList';
import Button from 'react-bootstrap/Button';

import './App.css';


function App() {

  const [countryName, setCountryName] = React.useState('PL');


  function handleChange(e) {
    const text = e.currentTarget.value;
    const countryName = text;
    setCountryName(countryName);
  }

  return (
    <div className="App">
      <header className="App-header"> 
      <div class="container">
        <div class="row">
          <div class="col-md-6 my-auto">
          <input onInput={handleChange} />     
            </div>
              <div class="col-md-6">
                <CitiesList 
                country = {countryName}
                />          
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;
