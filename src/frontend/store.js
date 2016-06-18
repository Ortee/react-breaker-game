import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

//DEBUG ON
// export default function configureStore(initialState = { dataButtonX: 0 }) {
//   return finalCreateStore(reducer, initialState)
// }

//DEBUG OFF
export default function configureStore(initialState = { dataButtonX: 0 }) {
  return createStore(reducer, initialState)
}
