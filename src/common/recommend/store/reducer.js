import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    authorRecommend: [],
    page: 0
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHOR_RECOMMEND:  
            return state.merge({
                authorRecommend: fromJS(action.result),
                page: (action.page === 5) ? 0 : action.page 
            });
        default: 
            return state;
    }
};