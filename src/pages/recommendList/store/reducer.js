import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    authorList: [],
    loadMore: false,
    page: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.AUTHOR_LIST: 
            return state.merge({
                authorList: (action.page === 1) ? fromJS(action.data) : state.get('authorList').concat(action.data),
                loadMore: (action.data.length < 12) ? false : true,
                page: action.page
            });
        default: 
            return state;
    }
};