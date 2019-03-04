import styled from 'styled-components';

// 作者推荐
export const RecommendWrap = styled.div` 
    margin-top: 20px;
    .title{ margin-bottom: 20px; }
    .title span{
        font-size: 14px;
        color: #969696;
    }
    .title a{
        float: right;
        cursor: pointer;    
    }
    .title .style-switch{
        margin-top: -1px;
    }
    .author-list{
        margin-bottom: 20px;
    }
    .author-list li{
        margin-top: 15px;
        line-height: 20px; 
    }
    .author-list li a{ cursor: pointer; }
    .author-list .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
    .author-list .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .author-list .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        line-height: 21px;
    }
    .author-list .follow i{
        float: left;
        margin-right: 2px;
    }
    .author-list .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    .author-list p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .find-more { 
        padding: 3px 7px 2px 12px; 
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        text-align: center;
        box-sizing: border-box;
        line-height: 26px;
        cursor: pointer;
        display: block;
    }
    .find-more i{
        font-size: 26px;  vertical-align: top;
        position: relative; top: -1px; left: -4px; color: #999;
    }
`;