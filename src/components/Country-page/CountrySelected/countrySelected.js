import React from "react";
import "./countrySelected.css";

function CountrySelected({
  flag,
  alpha3Code,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) {
  return (
    <div className="countrySelected">
      <img className="FlagCountry" src={flag} alt="" />
      <div>
        <div className="grid">
          <div>
            <h2> {name} </h2>
            <p>
              <strong>Native Name: </strong>
              {nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {population}{" "}
            </p>
            <p>
              <strong>Region: </strong> {region}{" "}
            </p>
            <p>
              <strong>Sub Region: </strong> {subregion}{" "}
            </p>
            <p>
              <strong>Capital :</strong> {capital}{" "}
            </p>
          </div>

          <div>
            <p>
              <strong>Top Level Domain: </strong> {topLevelDomain}{" "}
            </p>
            <p>
              <strong>Currencies: </strong>{" "}
              {currencies.map((item) => (
                <span key={item}>{item.name} </span>
              ))}{" "}
            </p>
            <p className="languages">
              <strong>Languagues: </strong>{" "}
              {languages.map((item) => (
                <span key={item}>{item.name} </span>
              ))}{" "}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Border Countries: </strong>{" "}
          {borders.map((item) => (
            <span key={item} className="border-item">
              {item}{" "}
            </span>
          ))}{" "}
        </p>
      </div>
    </div>
  );
}

export default CountrySelected;
