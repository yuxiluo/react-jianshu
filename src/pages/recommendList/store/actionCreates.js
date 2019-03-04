import axios from 'axios';
import * as actionTypes from './actionTypes';

const authorListAction = (result, page) => ({ 
    type: actionTypes.AUTHOR_LIST,
    data: result,
    page
})

export const getAuthorListData = (page) => {
    return (dispatch) => {
        axios.get('/react-jianshu/api/authorList'+page+'.json').then((res) => { 
            const result = res.data.data;
            dispatch(authorListAction(result, page));
        }).catch((error) => {
            console.log('获取推荐作者列表数据:', error)
        });
    };
};