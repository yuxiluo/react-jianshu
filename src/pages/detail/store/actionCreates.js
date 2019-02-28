// 用来创建action 
import axios from 'axios';
import * as actionTypes from './actionTypes';

const detailDataAction = (result) => ({
    type: actionTypes.CHANGE_DETAIL_DATA,
    result
});

const detailErrorAction = () => ({
    type: actionTypes.CHANGE_DETAIL_ERROR
});

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/react-jianshu/api/detail_'+id+'.json').then((res) => { 
            const result = res.data.data;
            dispatch(detailDataAction(result));
        }).catch((err) => {
            console.log('获取详情数据失败!');
            dispatch(detailErrorAction());
        });
    };
};