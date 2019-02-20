import { combineReducers } from "redux";
import henlo               from "./birbHenloReducer";
import about               from './birbAboutReducer';

export default combineReducers({
  henlo,
  about
});
