export default (state = false, {value, type}) => {
    switch (type) {
     case 'SHOW_THE_BIRBS':
      return {
        showBirb: value
      }
     default:
      return state
    }
   }