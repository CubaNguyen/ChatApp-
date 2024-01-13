import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,

    token: ''
}

const appReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case actionTypes.USER_LOGIN_SUCCESS:
    //         let copyState = { ...state };
    //         copyState.isLoggedIn = true
    //         return {
    //             ...state,
    //         }
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.token
            }

        case actionTypes.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                // userInfo: action.userInfo
            }

        // case actionTypes.ADMIN_LOGIN_FAIL:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         adminInfo: null
        //     }
        // case actionTypes.PROCESS_LOGOUT:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         adminInfo: null
        //     }
        default:
            return state;
    }
}

export default appReducer;