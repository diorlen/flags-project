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
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
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
  return (
    <div>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left" />
          Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </div>
  );
}

export default CountryPage;
