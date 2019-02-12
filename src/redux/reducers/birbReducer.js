export default (state = {}, action) => {
    switch (action.type) {
     case 'DISPLAY_BIRBS':
      return {
       result: action.value
      }
     default:
      return state
    }
   }