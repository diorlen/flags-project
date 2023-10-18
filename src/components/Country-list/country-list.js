import React, { useEffect } from "react";
import "./country-list.css";
import Country from "../Country/country";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/index";
import Wrapper from "../Wrapper/wrapper";

const CountryList = () => {
  const dispatch = useDispatch();
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryListByRegion = useSelector((state) => state.countryListByRegion);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return countryListByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }
    return state.countryList;
  });

  useEffect(() => {
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
  }, [dispatch]);

  const countries = countryList.map(
    ({ name, flags, population, region, capital, cca3 }) => {
      return (
        <Country
          flag={flags}
          name={name}
          population={population}
          region={region}
          capital={capital}
          alpha3Code={cca3}
          key={cca3}
          tabIndex="0"
        ></Country>
      );
    }
  );

  return (
    <Wrapper>
      <div className="CountryList"> {countries}</div>
    </Wrapper>
  );
};

export default CountryList;
