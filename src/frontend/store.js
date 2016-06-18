import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { dataButtonX }) {
  console.log(reducer, initialState);
  return finalCreateStore(reducer, initialState)
}