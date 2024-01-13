import { handleLoginApi } from '../../services/userService';
import actionTypes from './actionTypes';

// export const UserLogin = (data) => {


//     return async (dispatch, getState) => {
//         try {

//             let res = await handleLoginApi(data.phone, data.password)

//             console.log('data  ...', data)
//             if (res && res.errCode === 0) {
//                 dispatch(logInSuccess())
//             } else {
//                 dispatch(logInFail())
//             }
//         } catch (e) {
//             dispatch(logInFail())
//             console.log("logInFail ", e)
//         }
//     }
// }

export const logInSuccess = (token) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    token: token
})

export const logInFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const logOut = (token) => ({
    type: actionTypes.USER_LOGOUT_SUCCESS,
    token: token
})


