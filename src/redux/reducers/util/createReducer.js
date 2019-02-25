// helper file for reducing (excuse the pun) boilerplate of create reducers
// see: http://redux.js.org/docs/recipes/ReducingBoilerplate.html
export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } else {
        /*
        Note: In Redux, all reducers get called regardless of the action, 
        so inside each one you have to return the original state if the action is not applicable.
        */
        return state;
      }
    };
  }
  