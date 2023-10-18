import React from "react";
import { useHistory } from "react-router";
import "./country.css";
import numeral from "numeral";

function Country({ flag, name, population, region, capital, alpha3Code }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/country/${alpha3Code}`);
  };

  return (
    <div className="Country" onClick={handleClick} tabIndex="0">
      <img loading="lazy" src={flag?.png} alt="" />
      <div className="details">
        <h2>{name?.common}</h2>
        <p>
          <strong>Population: </strong>
          {numeral(population).format("0,0")}{" "}
        </p>
        <p>
          <strong>Region: </strong>
          {region}{" "}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}{" "}
        </p>
      </div>
    </div>
  );
}

export default Country;
