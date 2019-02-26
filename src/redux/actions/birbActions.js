import * as actionTypes from "./actionTypes";

export const displayBirbs = value => ({
  type: actionTypes.SHOW_THE_BIRBS,
  value
});

export const showHenloCode = value => ({
  type: actionTypes.SHOW_HENLO_CODE,
  value
});

export const updateBirbList = value => ({
  type: actionTypes.UPDATE_THE_BIRBS,
  value
});

export const updateLoadingStatus = value => ({
  type: actionTypes.BIRBS_LOADING_STATUS,
  value
});

export const updateShowAddBirb = value => ({
  type: actionTypes.SHOW_ADD_BIRB,
  value
})

export const getTheBirbs = () => async dispatch => {
  dispatch(updateLoadingStatus("loading"));
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    //just because its so fast...
    setTimeout(function() {
      dispatch(updateBirbList(json));
      dispatch(updateFilteredList(json));
      dispatch(updateLoadingStatus("loaded"));
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const filterBirbList = (list, filter) => dispatch => {
  dispatch(updateBirbFilter(filter));
  const filteredList = filterList(list, filter);
  dispatch(updateFilteredList(filteredList));
};

export const updateBirbFilter = value => ({
  type: actionTypes.UPDATE_BIRB_FILTER,
  value
});

export const updateFilteredList = value => ({
  type: actionTypes.UPDATE_FILTERED_LIST,
  value
});

const caseInsensitiveIncludes = (str = "", search) => str.toLowerCase().includes(search.toLowerCase());

const filterList = (list, filter) => list.filter(birb => caseInsensitiveIncludes(birb.username, filter) || caseInsensitiveIncludes(birb.name, filter) || birb.phone.includes(filter));
