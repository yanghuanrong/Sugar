
const defaultState = {
  isLogin: false
}

export const userReduce = (state = defaultState, action) => {
  switch (action.type) {
    case 'login':
      const newState = JSON.parse(JSON.stringify(state))
      newState.isLogin = true
      return newState
    default:
      return state
  }
}

export const login = (param) => dispatch => {
  setTimeout(() => {
    dispatch({type: 'login', value: param})
  }, 2000);
}

export const userStore = (state) => ({isLogin: state.user.isLogin})