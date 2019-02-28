import React, { Component } from 'react'; 
import Switch from '../switch';

import {
    SearchInfo,
    SearchInfoTitle, 
    SearchInfoKeyWord,
    SearchKeyWordItem,
    SearchInfoHistoryList,
    SearchInfoHistoryItem
} from './style';

class SearchDropDown extends Component {
    render() {  
        const { list, page, totalPage, mouseEnter, mouseLeave, handlePage } = this.props;
        let newList = list.toJS(); 
        let pageList = []; 

        if(newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                if( newList[i] !== undefined ) {
                    pageList.push(<SearchKeyWordItem key={newList[i]}>{newList[i]}</SearchKeyWordItem>);
                } 
            } 
        }  
        return (
            <SearchInfo
                onMouseEnter = {mouseEnter}
                onMouseLeave = {mouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <Switch callback = {handlePage.bind(this, page, totalPage)} /> 
                </SearchInfoTitle>
                <SearchInfoKeyWord> 
                    {pageList}
                </SearchInfoKeyWord>
                <SearchInfoHistoryList>
                    <SearchInfoHistoryItem className="iconfont icon-shijian">
                        小程序
                    </SearchInfoHistoryItem>
                    <SearchInfoHistoryItem>
                        React
                    </SearchInfoHistoryItem>
                </SearchInfoHistoryList>
            </SearchInfo>
        );
    };
};

export default SearchDropDown;