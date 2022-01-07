import { addAction } from './actions'
import { useState } from 'react'
import { connect } from 'react-redux'

function App({count, loginInfo, dispatch}) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  console.log(loginInfo)
  return (
    <div className="App">
      <p>{count.count}</p>
      <button onClick={()=>dispatch(addAction())}>+</button>

      <p>以下是登录</p>
      <p>登录状态：{loginInfo.name}</p>
      <div>账号<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></div>
      <div>密码<input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
      <div onClick={()=>dispatch({ type: 'login', account: { name, password } })}>登录</div>
    </div>
  );
}

export default connect(({count, loginInfo})=>({count, loginInfo}))(App)
