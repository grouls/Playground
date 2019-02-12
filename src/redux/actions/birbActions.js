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
      setTimeout(function(){
        dispatch(updateBirbList(birbs));
        dispatch(updateLoadingStatus('loaded'));
      }, 3000);
    })
  } catch (error) {
    console.log(error);
  }
};
