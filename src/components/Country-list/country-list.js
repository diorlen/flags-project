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
      console.log("Aqui");
      return countryListByName;
    }
    return state.countryList;
  });

  console.log(countryList);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
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

  useEffect(() => {
    console.log(countryList);
  }, [countryList]);

  const countries = countryList.map(
    ({ name, flag, population, region, capital, alpha3Code }) => {
      return (
        <Country
          flag={flag}
          name={name}
          population={population}
          region={region}
          capital={capital}
          alpha3Code={alpha3Code}
          key={alpha3Code}
          tabindex="0"
        ></Country>
      );
    }
  );

  return (
    <Wrapper>
      <p className="test">Algo</p>
      <div className="CountryList"> {countries}</div>
    </Wrapper>
  );
};

export default CountryList;
