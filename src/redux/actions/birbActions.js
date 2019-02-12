export const displayBirbs = value => dispatch => {
  dispatch({
    type: "SHOW_THE_BIRBS",
    value
  });
};
