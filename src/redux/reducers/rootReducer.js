import { combineReducers }        from "redux";
import henlo                      from "./henlo";
import about                      from './about';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  henlo,
  about,
  form: formReducer
});

/*
Redux form note:

The store should know how to handle actions coming from the form components. 
To enable this, we need to pass the formReducer to your store. It serves for all 
of your form components, so you only have to pass it once.
*/

