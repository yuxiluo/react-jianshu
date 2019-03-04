import styled from 'styled-components';

export const RecommendListWrap = styled.div`
    width: 960px;
    margin: 0 auto;
    padding: 30px 0 50px; 
    .column-title{
        height: 100px;
        background: url(${require('../../statics/recommend-author.png')}) no-repeat left top;
        background-size: 100%;
    }
    .column-title .help{
        float: right;
        height: 20px; line-height: 20px; 
        margin: 40px 30px 0;
        font-size: 17px; color: #fff;
    } 
    .column-title .help i{
        float: left; margin-right: 5px;
        font-size: 20px;
    }
    .column-list ul{ 
        margin-left: -15px;
        width: 105%; 
    }
    .column-list ul::after{
        content: '';
        display: block;
        width: 0; height: 0; visibility: hidden;
        clear: both;
    }
    .column-list li{
        float: left; 
        width: 300px;
        padding: 0 15px;
        vertical-align: top;
    }
    .author-item{
        position: relative;
        height: 320px;
        margin-top: 80px;
        padding: 0 20px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        background-color: #f7f7f7;
        text-align: center;
    }
    .author-item .pic{
        width: 80px;
        height: 80px;
        margin: -40px 0 10px;
        display: inline-block;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 40px;
    }
    .author-item .name{
        font-size: 21px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 10px 0;
        color: #2f2f2f;
    }
    .author-item .name i{
        margin-left: 5px;
        color: #579cd1;
        font-size: 18px;
        font-weight: normal;
    }
    .author-item .name .ic-woman{
        color: #ea6f5a;
    } 
    .author-item .des{
        max-width: 180px;
        min-height: 50px;
        font-size: 13px;
        line-height: 25px;
        margin: 0 auto 10px;
        color: #333;
    }
    .author-item .btn{   
        display: inline-block;
        width: 100px;
        padding: 8px 0;
        border-color: #42c02e;
        background-color: #42c02e;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
    }
    .author-item .meta{
        height: 41px; line-height: 41px;
        position: relative;
    }
    .author-item .meta i{
        height: 1px; width: 100%;
        overflow:hidden;
        position: absolute; top: 20px; left: 0;
        background: #eaeaea;
    }
    .author-item .meta span{
        float: left; position: relative; z-index: 2;
        padding-right: 10px;
        font-size: 12px;
        color: #969696;
        background-color: #f8f8f8;
    }
    .author-item .recent-update .new{
        font-size: 13px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        color: #333;
    }
    .author-item .recent-update .new:hover{
        text-decoration: underline;
    }
    .load-more{
        display: block;
        width: 40%;
        padding: 10px 0;
        margin: 40px auto;
        font-size: 15px;
        border-radius: 20px;
        color: #fff;
        background-color: #a5a5a5; 
        text-align: center;
        cursor: pointer;
        vertical-align: middle;
    }
    .base-line{
        margin: 30px auto 60px; 
        color: #b4b4b4;
        width: 300px;
        border-bottom: 1px solid #eee;
        height: 8px;
        position: relative;
        text-align: center;
    }
    .base-line span{
        background: #fff;
        padding: 0 12px;
    }
`;