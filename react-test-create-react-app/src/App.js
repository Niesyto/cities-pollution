import React from 'react';
import CitiesList from './CitiesList';
import RadioButton from './RadioButton';


import './App.css';


function App() {

  const [countryName, setCountryName] = React.useState("");
  const [parameter, setParameter] = React.useState("");


  function handleChange(e) {
    setCountryName(e.currentTarget.value);
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <input onInput={handleChange} />  
              <br/>
              <RadioButton setParameter={setParameter}/>
            </div>
            <div className="col-md-6">
              <CitiesList 
                country = {countryName}
                parameter = {parameter}
              />          
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;
