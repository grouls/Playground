// helper file for reducing (excuse the pun) boilerplate of create reducers
// see: http://redux.js.org/docs/recipes/ReducingBoilerplate.html
export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } else {
        return state;
      }
    };
  }
  