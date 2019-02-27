import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({ 
    author: {},
    artcile: {}
});

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_DETAIL_DATA: 
            return state.merge({ 
                author: fromJS(action.result.author),
                artcile: fromJS(action.result.artcile)
            });
        case actionTypes.CHANGE_DETAIL_ERROR:
            return state.merge({
                author: state.set('author', {}),
                artcile: state.set('artcile', {}) 
            });  
        default:
            return state;
    }
};