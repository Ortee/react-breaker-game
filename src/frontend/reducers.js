let reducer = function(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_BUTTONX':
      console.log("CHANGE_BUTTONX!!!!!!!!");
      return Object.assign({}, state, action.text)
    default:
      return state;
  }
}

export default reducer
