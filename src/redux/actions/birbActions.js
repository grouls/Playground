export const displayBirbs = value => dispatch => {
  dispatch({
    type: "SHOW_THE_BIRBS",
    value
  });
};

export const updateBirbList = value => {
  return({
    type: "UPDATE_THE_BIRBS",
    value
  });
};

export const updateLoadingStatus = value => {
  return({
    type: "BIRBS_LOADING_STATUS",
    value
  });
};

export const getTheBirbs = () => dispatch => {
  dispatch(updateLoadingStatus('loading'));
  try {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(birbs => {
      //just because its so fast... 
      setTimeout(function(){
        dispatch(updateBirbList(birbs));
        dispatch(updateFilteredList(birbs));
        dispatch(updateLoadingStatus('loaded'));
      }, 3000);
    })
  } catch (error) {
    console.log(error);
  }
};

export const filterBirbList = (list, filter) => dispatch => {
  dispatch(updateBirbFilter(filter));
  const filteredList = filterList(list, filter);
  dispatch(updateFilteredList(filteredList));
}

export const updateBirbFilter = value => {
  return({
    type: "UPDATE_BIRB_FILTER",
    value
  })
}

export const updateFilteredList = (value) => {
  return({
    type: "UPDATE_FILTERED_LIST",
    value
  })
}


const caseInsensitiveIncludes = (str = '', search) => str.toLowerCase().includes(search.toLowerCase());
const filterList = (list, filter) => list.filter((birb) =>
  caseInsensitiveIncludes(birb.username, filter) ||
  caseInsensitiveIncludes(birb.name, filter) ||
  birb.phone.includes(filter)
);

