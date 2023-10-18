import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/wrapper";
import { useDispatch } from "react-redux";
import CountrySelected from "./CountrySelected/countrySelected";
import * as actions from "../../store/index";
import "./countryPage.css";

function CountryPage({ match, history }) {
  const dispatch = useDispatch();
  const [country, setCountry] = useState();

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.com/v3.1/alpha/${match.params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCountry(data);
        });
    }

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch(actions.setCountryList(list));
      })
      .catch(() => {
        console.log("Error");
      });
  }, [match.params.id, dispatch, country]);

  const handleClick = () => {
    history.push("/");
  };

  const countries = country?.map(
    ({
      name,
      flags,
      population,
      region,
      capital,
      cca3,
      subregion,
      currencies,
      languages,
      borders,
    }) => {
      return (
        <CountrySelected
          flag={flags}
          name={name}
          population={population}
          region={region}
          subregion={subregion}
          capital={capital}
          alpha3Code={cca3}
          key={cca3}
          currencies={currencies}
          languages={languages}
          borders={borders}
          tabIndex="0"
        ></CountrySelected>
      );
    }
  );

  return (
    <div>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left" />
          Back
        </button>
        {countries}
      </Wrapper>
    </div>
  );
}

export default CountryPage;
