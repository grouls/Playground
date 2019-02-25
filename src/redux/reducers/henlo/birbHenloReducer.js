import createReducer    from "../util/createReducer";
import * as actionTypes from "../../actions/actionTypes";
import initialState     from "./initialState";

// action handlers
const actionHandlers = {
  [actionTypes.SHOW_THE_BIRBS]: (state, { value }) => ({ showBirb: value }),
  [actionTypes.SHOW_HENLO_CODE]: (state, { value }) => ({ showCode: value })
};

// reducer
export default createReducer(initialState, actionHandlers);

// This is how we would structure our reducer without a createReducer fn that helps reduce boilerplate.

// export default (state = false, {value, type}) => {
//     switch (type) {
//      case 'SHOW_THE_BIRBS':
//       return {
//         showBirb: value
//       }
//      default:
//       return state
//     }
//    }
