import styled from 'styled-components';

// 首页左侧信息列表
export const ListWrap = styled.div` 
    border-top: 1px solid #f0f0f0;
    padding-top: 15px;
    margin-top: 30px;
    li.items{ 
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        box-sizing: border-box;
    }
    li.haspic{
        min-height: 140px;
    }
    li.haspic .content{
        padding-right: 165px;
    }
    li.items .wrap-img{ 
        width: 150px; height: 100px;
        position: absolute; top: 50%; right: 0;
        margin-top: -60px;
    }
    li.items .wrap-img img{
        width: 100%; height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
    li.items .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333; 
    }
    li.items .abstract{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    li.items .meta{ 
        font-size: 12px;
        font-weight: 400;
        line-height: 20px; 
    }
    li.items .meta span,
    li.items .meta a{
        margin-right: 10px; 
        color: #b4b4b4;
    }
    li.items .meta .jsd-meta{
        color: #ea6f5a;
    } 
    li.items .meta i.iconfont{
        font-size: 13px;
    }

    .read-more{
        width: 100%;
        height: 40px; line-height: 40px;
        margin: 30px auto 60px; 
        box-sizing: border-box;
        text-align: center;
        font-size: 15px; color: #fff;
        border-radius: 20px;
        background: #a5a5a5;
        cursor: pointer;
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