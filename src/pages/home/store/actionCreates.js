import axios from 'axios'; 
import * as actionTypes from './actionTypes';

const homeAllDataAction = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    data
});

// 获取整个首页的数据
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => { 
            const data = res.data.data; 
            dispatch(homeAllDataAction(data));  
        }).catch((err) => {
            console.log('失败', err)
        }); 
    };
};