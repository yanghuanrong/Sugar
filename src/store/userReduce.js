
const defaultState = {
  isLogin: true,
  userinfo: {},
}

export const userReduce = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'LOGIN':
      newState.isLogin = true
      newState.userinfo = action.value
      return newState
    default:
      return state
  }
}

/**
 * userStore
 * 导出所有用户模块的数据
 */
export const userStore = (state) => (state.user)

export const login = (param) => ({type: 'LOGIN', value: param})
