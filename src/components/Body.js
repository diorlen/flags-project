import React from "react";
import CountryList from "./Country-list/country-list";
import Region from "./Filter/Dropdown/Dropdown";
import Search from "./Filter/Search";
import Wrapper from "./Wrapper/wrapper";

const body = () => {
  return (
    <Wrapper>
      <Search></Search>
      <Region></Region>
      <CountryList />
    </Wrapper>
  );
};

export default body;
