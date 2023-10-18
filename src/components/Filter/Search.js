import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input/input";
import * as actions from "../../store/index";
import "./Search.css";

function Search() {
  const countryListByName = useSelector((state) => state.countryListByName);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch(actions.filterCountryName(e.target.value));
  };

  const clearInput = () => {
    setInputValue("");
    dispatch(actions.filterCountryName(""));
  };

  return (
    <div className="Search-container">
      <div className="Search">
        {countryListByName.length === 0 && inputValue && (
          <p>
            <strong>{inputValue}</strong> Not found in contries
          </p>
        )}
      </div>
      <div className="SearchClose">
        {inputValue && (
          <i className={"fas fa-times close"} onClick={clearInput}></i>
        )}
        <Input value={inputValue} onChange={filterByName} />
      </div>
    </div>
  );
}

export default Search;
