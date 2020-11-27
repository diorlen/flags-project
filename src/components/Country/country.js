import React from "react";
import { useHistory } from "react-router";
import slugify from "slugify";
import "./country.css";

function Country({ flag, name, population, region, capital, alpha3Code }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/country/${slugify(alpha3Code)}`);
  };
  return (
    <div className="Country" onClick={handleClick} tabindex="0">
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population}{" "}
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
