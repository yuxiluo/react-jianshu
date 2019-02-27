import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    articleList: [],
    articlePage: 1,
    articleLoad: true
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_ARTICLE_LIST:  
            return state.merge({
                articleList: state.get('articleList').concat(action.result),
                articlePage: action.nextPage,
                articleLoad: action.isLoad
            }); 
        default: 
            return state;
    }
};