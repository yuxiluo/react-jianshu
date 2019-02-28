import axios from 'axios'; 
import * as actionTypes from './actionTypes';

const articleAction = (result, nextPage, isLoad) => ({ 
    type: actionTypes.CHANGE_ARTICLE_LIST,
    result,
    nextPage,
    isLoad
});

// 获取点击阅读更多的数据
export const getArticleData = (page) => {
    return (dispatch) => {
        axios.get('/react-jianshu/api/readMore'+ page +'.json?page=' + page).then((res) => { 
            const result = res.data.data;
            const articleLoad = (result.length < 10) ? false : true; 
            dispatch(articleAction(result, page + 1, articleLoad));
        }).catch((err) => {
            console.log('加载失败:', err);
        });
    };
};