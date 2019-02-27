import axios from 'axios';
import * as actionTypes from './actionTypes';

const recommendAction = (result, page) => ({
    type: actionTypes.GET_AUTHOR_RECOMMEND,
    result,
    page
});

export const getRecommend = (page) => {
    return (dispatch) => {  
        axios.get('/api/authorRecommend'+page+'.json').then((res) => { 
            const result = res.data.data; 
            dispatch(recommendAction(result, page));
        }).catch((error) => {
            console.log('推荐作者加载失败!', error);
        });
    };
};

