export default (state = {}, { value, type }) => {
  switch (type) {
    case "UPDATE_THE_BIRBS":
      return { ...state, birbList: value };
    case "BIRBS_LOADING_STATUS":
      return { ...state, birbsLoadingStatus: value };
    default:
      return state;
  }
};
