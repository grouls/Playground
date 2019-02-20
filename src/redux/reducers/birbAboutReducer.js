export default (state = {}, { value, type }) => {
  switch (type) {
    case "UPDATE_THE_BIRBS":
      return { ...state, birbList: value, filteredBirbList: value };
    case "BIRBS_LOADING_STATUS":
      return { ...state, birbsLoadingStatus: value };
    case "UPDATE_BIRB_FILTER":
      return { ...state, filter: value };
    case "UPDATE_FILTERED_LIST":
      return {...state, filteredBirbList : value}
    default:
      return state;
  }
};
