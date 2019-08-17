import { createStore } from 'redux'

const defaultState = {
  isLogin: false
}

const reduce = (state = defaultState, action) => {
  console.log(1111)
  switch (action.type) {
    case 'login':
      const newState = JSON.parse(JSON.stringify(state))
      newState.isLogin = true
      console.log(111)
      return newState
    default:
      return state
  }
}

const store = createStore(reduce)

export default store