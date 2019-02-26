import createReducer    from "../util/createReducer";
import * as actionTypes from "../../actions/actionTypes";
import initialState     from "./initialState";

// action handlers
const actionHandlers = {
  [actionTypes.UPDATE_THE_BIRBS]    : (state, { value }) => ({ ...state, birbList: value, filteredBirbList: value }),
  [actionTypes.BIRBS_LOADING_STATUS]: (state, { value }) => ({ ...state, birbsLoadingStatus: value }),
  [actionTypes.UPDATE_BIRB_FILTER]  : (state, { value }) => ({ ...state, filter: value }),
  [actionTypes.UPDATE_FILTERED_LIST]: (state, { value }) => ({ ...state, filteredBirbList: value }),
  [actionTypes.SHOW_ADD_BIRB]       : (state, {value}) => ({...state, showAddBirb: value})
};

// reducer
export default createReducer(initialState, actionHandlers);

// This is how we would structure our reducer without a createReducer fn that helps reduce boilerplate.

// export default (state = {}, { value, type }) => {
//   switch (type) {
//     case "UPDATE_THE_BIRBS":
//       return { ...state, birbList: value, filteredBirbList: value };
//     case "BIRBS_LOADING_STATUS":
//       return { ...state, birbsLoadingStatus: value };
//     case "UPDATE_BIRB_FILTER":
//       return { ...state, filter: value };
//     case "UPDATE_FILTERED_LIST":
//       return {...state, filteredBirbList : value}
//     default:
//       return state;
//   }
// };
