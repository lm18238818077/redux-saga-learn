function index(state = "", action = {}) {
  switch (action.type) {
    case "loginSuccess":
      return { ...state, ...action.loginInfo };
    default:
      return state;
  }
}

export default index;
