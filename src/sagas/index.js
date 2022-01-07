import { all, put, take, takeLatest, call } from 'redux-saga/effects'
import { loginService } from '../service/api'

// 登录功能saga
function* login(action) {
    try {
        // 调用我们的登录接口，获取登录成功失败的信息
        const loginInfo = yield call(loginService, action.account)
        // 如果登录成功，更新store中的loginInfo
        yield put({ type: 'loginSuccess', loginInfo })
    } catch (error) {
        // 登录失败 弹出登录失败的message
        alert(error.msg)
    }
}
// 登出功能saga，更新store中的loginInfo为{ success: false }
function* loginOut() {
    yield put({ type: 'loginSuccess', loginInfo: { success: false, name: '', password: '' } })
}
// watchLogin 监听登录action（type:login）与登出action（type:loginOut），并执行对应的saga
function* watchLogin() {
    yield takeLatest('login', login)
    yield takeLatest('loginOut', loginOut)
}
// rootSaga负责启动watchLogin
function* rootSaga() {
    yield all([watchLogin()])
}
export default rootSaga
