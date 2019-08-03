import React from 'react';
import CitiesList from './CitiesList';
import RadioButton from './RadioButton';
import './App.css';
import SearchBar from './SearchBar';
import Col from 'react-bootstrap/Col'


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
              <Col md={{ span: 10, offset: 1 }}>
                <SearchBar setCountryName={setCountryName} />
                <RadioButton setParameter={setParameter}/> 
              </Col>
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
