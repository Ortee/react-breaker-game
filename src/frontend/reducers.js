let reducer = function(state, action) {
  switch (action.type) {
    case 'CHANGE_BUTTONX':
      return Object.assign({}, state, { dataButtonX: action.dataButtonX })
    default:
      return state;
  }
}

export default reducer
