import React from 'react';
import ButtonGroup  from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';

function RadioButton(props) {

    function handleChange(e) {
        props.setParameter(e.currentTarget.value);
    }    

    return(  
        <ButtonGroup justified>
            <Button value="pm25" onClick={handleChange}>PM2,5</Button>
            <Button value="pm10" onClick={handleChange}>PM10</Button>
            <Button value="so2" onClick={handleChange}>SO₂</Button>
            <Button value="no2" onClick={handleChange}>NO₂</Button>
            <Button value="o3" onClick={handleChange}>O₃</Button>
            <Button value="co" onClick={handleChange}>CO</Button>
            <Button value="bc" onClick={handleChange}>BC</Button>
        </ButtonGroup>  
    )
}



export default RadioButton;
