import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

// 创建action
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

const searchList = (data) => ({
    type: actionTypes.SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

// 异步获取数据-返回一个函数
export const getSearchList = () => {
    return (dispatch) => {
        axios.get('/api/headerSearchList.json')
        .then((res) => {
            const data = res.data.data;
            dispatch(searchList(data));
        })
        .catch((err) => {
            console.log('Error:' + err);
        });
    };
};

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});