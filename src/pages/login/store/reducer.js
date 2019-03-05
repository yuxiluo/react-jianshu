import { fromJS } from 'immutable';
import storage from '../../../utils/storage';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    login: storage.getStorage('isLogin'),
    logining: false,
    errorTips: '',
    userInfo: {}
});

export default (state = defaultState, action) => {  
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN: 
            // 登录成功 - 本地存储用户信息
            storage.setStorage('isLogin', true); 
            return state.merge({
                "login": true,
                "userInfo": fromJS(action.data)
            });
        case actionTypes.CHANGE_LOGINING:
            return state.set('logining', true);
        case actionTypes.CHANGE_LOGIN_ERROR:
            return state.merge({
                "errorTips": action.errorTips,
                "logining": false
            });
        case actionTypes.CHANGE_LOGOUT:  
            storage.removeStorage('isLogin');
            return state.merge({
                "login": false,
                "logining": false,
                "errorTips": '',
                "userInfo": fromJS({})
            });
        default: 
            return state;
    }
};