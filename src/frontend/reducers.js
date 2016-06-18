let reducer = function(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_BUTTONX':
      return Object.assign({}, state, { dataButtonX: action.text })
    default:
      return state;
  }
}

export default reducer
