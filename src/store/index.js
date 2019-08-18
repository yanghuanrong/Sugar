import { createStore } from 'redux'

const defaultState = {
  isLogin: false
}

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case 'login':
      const newState = JSON.parse(JSON.stringify(state))
      newState.isLogin = true
      return newState
    default:
      return state
  }
}

const store = createStore(reduce)

export default store