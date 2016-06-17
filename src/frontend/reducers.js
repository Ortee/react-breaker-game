import { combineReducers } from 'redux'


const gameApp = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'BUTTON_X':
      return {
        dataButtonX:action.dataButtonX
      }
    default:
      return state
  }
}

export default gameApp
