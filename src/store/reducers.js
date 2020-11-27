import * as actionTypes from "./actionTypes";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
  filterByRegion: "",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_COUNTRY_LIST: {
      return { ...state, countryList: action.payload };
    }
    case actionTypes.FILTER_COUNTRY_REGION: {
      const regionSelected = action.payload;
      if ("" === regionSelected) {
        return { ...state, countryListByRegion: [], filterByRegion: "" };
      }
      const countryListByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );
      return {
        ...state,
        countryListByRegion,
        filterByRegion: regionSelected,
      };
    }
    case actionTypes.FILTER_COUNTRY_NAME: {
      let list;
      if (state.filterByRegion !== "") {
        list = state.countryListByRegion;
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
