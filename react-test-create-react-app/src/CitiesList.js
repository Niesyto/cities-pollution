import React from 'react';
import CitiesListElement from './CitiesListElement';
import { Accordion } from 'react-light-accordion';

class CitiesList extends React.Component{

    constructor(props){
        super(props);
    this.state = {
      parameter: "",
      country: "",
      cities: [],
      isLoaded:false
      };
    }

  componentDidUpdate(){
   
    fetch(`https://api.openaq.org/v1/latest?order_by=value&sort=desc&limit=10&parameter=${this.props.parameter}&country=${this.props.country}`, {mode: 'cors'})
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
                country : this.props.country,
                parameter : this.props.parameter,
                cities : result.results,
                isLoaded : true
            });
        });
  }


  static getDerivedStateFromProps(props, state) {
    if ((props.country !== state.country) || (props.parameter !== state.parameter)) {
      return {
        isLoaded:false
      };
    }

    // Return null if the state hasn't changed
    return null;
  }


    render(){  
        const {cities,isLoaded} = this.state;
        if(!isLoaded){
            return(
            <div> Loading... </div>
            )
        } else {
            return(
                <div className="w-10 p-3">
                {cities.map(city => (
                    <Accordion atomic={true} key={city.location}>
                        <CitiesListElement
                        cityName={city.city}
                        />
                    </Accordion>
                ))}
                </div>
            );
        }
    }
}


  export default CitiesList;

