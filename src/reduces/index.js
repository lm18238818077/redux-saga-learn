import { combineReducers } from 'redux'
import count from './count'
import loginInfo from './loginInfo'

const initState = {
  root: 'init'
}

function root(state = initState, action ){
  return state
}

const rootReducer = combineReducers({
  root,
  count,
  loginInfo
})

export default rootReducer