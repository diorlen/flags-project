import React from "react";
import "./countrySelected.css";
import numeral from "numeral";

function CountrySelected({
  flag,
  name,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders = [],
}) {
  return (
    <div className="countrySelected">
      <img className="FlagCountry" src={flag?.png} alt="" />
      <div>
        <div className="grid">
          <div>
            <h2> {name?.common} </h2>
            <p>
              <strong>Native Name: </strong>
              {name?.official}
            </p>
            <p>
              <strong>Population: </strong>
              {numeral(population).format("0,0")}{" "}
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
              {currencies &&
                Object.values(currencies).map((item) => (
                  <span key={item}>{item.name} </span>
                ))}{" "}
            </p>
            <p className="languages">
              <strong>Languagues: </strong>{" "}
              {Object.values(languages).map((item) => (
                <span key={item}>{item} </span>
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
