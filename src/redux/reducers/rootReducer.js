import { combineReducers } from "redux";
import showTheBirbs        from "./birbReducer";
import birbs               from './birbAboutReducer';

export default combineReducers({
  showTheBirbs,
  birbs
});
