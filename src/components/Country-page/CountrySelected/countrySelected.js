import React from "react";
import "./countrySelected.css";
import numeral from "numeral";
import { useSelector } from "react-redux";

function CountrySelected({
  flag,
  name,
  population,
  region,
  subregion,
  capital,
  currencies,
  languages,
  borders,
}) {
  const countryList = useSelector((state) => state.countryList);
  const handleClick = (item) => {
    window.location.replace(`/country/${item}`);
  };

  return (
    <div className="countrySelected">
      <img className="FlagCountry" src={flag?.png} alt="" />
      <div>
        <h1> {name?.common} </h1>
        <div className="grid">
          <div>
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
          {borders.map((item) =>
            countryList.map((data) => {
              if (data.cca3 === item) {
                return (
                  <span
                    key={item}
                    className="border-item"
                    onClick={() => handleClick(item)}
                  >
                    {data.name.common}
                    {data.flag}
                  </span>
                );
              }
            })
          )}
        </p>
      </div>
    </div>
  );
}

export default CountrySelected;
