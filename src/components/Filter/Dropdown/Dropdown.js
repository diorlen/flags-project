import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/index";
import "./Dropdown.css";

export const Region = () => {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);
  const [dropdown, setdropdown] = useState(false);

  const onRegionChange = (selectEvent) => {
    dispatch(actions.filterCountryRegion(selectEvent));
  };

  return (
    <div className="Container" tabIndex="0">
      <div
        className={`${dropdown ? "dropdown open" : "dropdown"}`}
        onClick={() => setdropdown(!dropdown)}
        id="filter"
      >
        {filterByRegion}
        <i className="fas fa-chevron-down"></i>
        <ul>
          <li onClick={() => onRegionChange("")}>-</li>
          <li onClick={() => onRegionChange("Africa")}>Africa</li>
          <li onClick={() => onRegionChange("Americas")}>Americas</li>
          <li onClick={() => onRegionChange("Asia")}>Asia</li>
          <li onClick={() => onRegionChange("Europe")}>Europe</li>
          <li onClick={() => onRegionChange("Oceania")}>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default Region;
