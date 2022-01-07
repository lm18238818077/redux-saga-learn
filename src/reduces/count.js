import { ADD } from '../actions/actionTypes'
const initState = {
  count: 0
}

function index(state = initState, action) {
  if (action.type === ADD) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
}

export default index;
