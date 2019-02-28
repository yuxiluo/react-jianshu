import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({ 
    specialList: [], 
    menuList: []
});

export default (state = defaultState, action) => { 
    switch(action.type) { 
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({ 
                specialList: fromJS(action.data.specialList), 
                menuList: fromJS(action.data.menuList)
            }); 
        default:
            return state;
    };
};