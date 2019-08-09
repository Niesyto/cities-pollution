import React, { useState, useEffect, useCallback } from "react";
import CitiesListElement from "./CitiesListElement";
import { Accordion } from "react-light-accordion";

function CitiesList({ country, parameter }) {
  const [cities, setCities] = useState(undefined);

  const getCities = useCallback(() => {
    const url = `https://api.openaq.org/v1/latest?order_by=value&sort=desc&limit=10&parameter=${parameter}&country=${country}`;

    fetch(url, { mode: "cors" })
      .then(_ => _.json())
      .then(({ results }) => setCities(results));
  }, [country, parameter]);

  useEffect(() => {
    getCities();
  }, [getCities]);

  if (cities === undefined) return <div>Loading data...</div>;
  if (cities === null || (cities && cities.length === 0))
    return <div>There is no data...</div>;

  const citiesElements = cities.map(city => (
    <Accordion atomic={true} key={city.location}>
      <CitiesListElement cityName={city.city} />
    </Accordion>
  ));
  return <div className="w-10 p-3">{citiesElements}</div>;
}

export default CitiesList;
