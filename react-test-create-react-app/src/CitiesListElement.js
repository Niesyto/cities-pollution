import React from 'react';
import { AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class CitiesListElement extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        cityInfo: {},
        isLoaded:false
      };
    }

 
      componentDidMount() {
        fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&origin=*&explaintext=1&titles="+this.props.cityName)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    cityInfo : result.query.pages,
                    isLoaded : true
                });
            });
      }


    render(){
        const {cityInfo,isLoaded} = this.state;
        var citySummary;

        if(!isLoaded){
            return(
            <div> Loading... </div>
            )
        }
        else{
            for (var i in cityInfo) {
                citySummary=cityInfo[i].extract;
            }
            return (     
                <AccordionItem title={this.props.cityName}>
                    <h6>{citySummary}</h6>
                </AccordionItem> 
            );
        }
    }
}



export default CitiesListElement;