export const displayBirbs = value => dispatch => {
  dispatch({
    type: "DISPLAY_BIRBS",
    value
  });
};
