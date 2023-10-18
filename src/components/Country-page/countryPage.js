import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/wrapper";
import { useSelector } from "react-redux";
import CountrySelected from "./CountrySelected/countrySelected";
import "./countryPage.css";

function CountryPage({ match, history }) {
  let DBcountry = useSelector((state) =>
    state.countryList.find((item) => item.alpha2Code === match.params.id)
  );
  const [country, setCountry] = useState(DBcountry);

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
  }, [country, match.params.id]);

  const handleClick = () => {
    history.goBack();
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
