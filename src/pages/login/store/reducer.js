import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    login: false,
    logining: false,
    errorTips: '',
    userInfo: {}
});

export default (state = defaultState, action) => {  
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN: 
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