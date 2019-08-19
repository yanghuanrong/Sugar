import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {userReduce} from './userReduce'

const store = createStore(
  combineReducers({
    user: userReduce
  }), 
  applyMiddleware(thunk)
)

export default store
