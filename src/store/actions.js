import * as actionTypes from "./actionTypes";

export const setCountryList = (list) => {
  return {
    type: actionTypes.SET_COUNTRY_LIST,
    payload: list,
  };
};

export const filterCountryName = (name) => {
  return {
    type: actionTypes.FILTER_COUNTRY_NAME,
    payload: name,
  };
};

export const filterCountryRegion = (regionSelected) => {
  return {
    type: actionTypes.FILTER_COUNTRY_REGION,
    payload: regionSelected,
  };
};
