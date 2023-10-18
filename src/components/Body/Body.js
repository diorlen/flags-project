import React from "react";
import CountryList from "../Country-list/country-list";
import Region from "../Filter/Dropdown/Dropdown";
import Search from "../Filter/Search";
import Wrapper from "../Wrapper/wrapper";
import "./body.css";

const body = () => {
  return (
    <Wrapper>
      <div className="container-body">
        <Search />
        <Region />
      </div>
      <CountryList />
    </Wrapper>
  );
};

export default body;
