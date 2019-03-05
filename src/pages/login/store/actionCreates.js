import axios from 'axios'; 
import * as actionTypes from './actionTypes';

const loginAction = (data) => ({
    type: actionTypes.CHANGE_LOGIN,
    data
});

const loginErrorAction = (errorTips) => ({
    type: actionTypes.CHANGE_LOGIN_ERROR,
    errorTips
});

export const login = (account, password) => {
    return (dispatch) => { 
        axios.get('/react-jianshu/api/login.json').then((res) => { 
            const result = res.data.data;
            result.userName = account; 
            dispatch(loginAction(result)); 
        }).catch((error) => {  
            dispatch(loginErrorAction('登录名或密码错误，请重试!'));
        });
    };
};

// 登录中
export const logining = () => ({
    type: actionTypes.CHANGE_LOGINING
});

// 退出登录
export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT
});