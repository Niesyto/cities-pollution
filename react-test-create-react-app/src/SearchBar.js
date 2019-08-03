import React, { useEffect} from "react";
import Select from 'react-select'

function SearchBar(props) {
  const [options, setOptions] = React.useState([]);
  
  function handleChange(e) {
    props.setCountryName(e.code);
    }

    useEffect(() => {
      async function FetchData() {
        fetch(`https://api.openaq.org/v1/countries`, {mode: 'cors'})
          .then(res => res.json())
            .then(
            (result) => {
              setOptions(result.results)
            }) 
          }   
          FetchData()   
      }
    ,[])  

    const customStyles = {
      option: (provided) => ({
        ...provided,
        color: 'black',
        padding: 5
      })
    }

  return(
    <Select
    placeholder="Choose country" 
    onChange={handleChange}
    getOptionLabel={option => {
      return option.name;
    }}
    getOptionValue={option => {
      return option.code;
    }}
    options={options}
    styles={customStyles}
    />
  )
}

export default SearchBar;