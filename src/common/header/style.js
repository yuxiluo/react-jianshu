import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrap = styled.div` 
    position: fixed; top: 0; z-index:100;
    width: 100%; height: 58px;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    .header-content {
        position: relative; 
        min-width: 768px;
        max-width: 1440px; 
        margin: 0 auto;
        height: 58px;
    }
`;

export const LogoPic = styled.span`
    float: left;
    width: 100px; height: 56px;
    background: url(${logoPic}) no-repeat;
    background-size: contain;
`;

export const NavWrap = styled.div`
    width: 960px; height: 100%;
    box-sizing: border-box;  
    margin: 0 auto; 
    .navbar{
        float: left;
        height: 100%;  
    }
    .navbar li{
        float: left;
        height: 100%; 
        margin-right: 10px;
    }
    .navbar .navitem {
        display: block;
        line-height: 58px; 
        line-height: 28px;
        padding: 15px;
        color: #333;
        box-sizing: border-box;
    }
    .navbar .active{
        color: #ea6f5a;
    }
    .navbar a:hover{
        background: #f5f5f5;
    }
    .navbar .nohover a:hover{
        background: none;
    }
    .navbar .active:hover{
        background: none;
    } 
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrap = styled.div`
    position: relative;
    float: left;
    margin-top: 9px;
    .icon-search{
        position: absolute; right: 5px; top: 5px;
        width: 30px; line-height: 30px;
        border-radius: 15px;
        text-align: center;  
    }
    &.focused{
        .search-input{
            width: 240px;
        }
        .icon-search{
            background: #969696;
            color: #fff;
        }
    } 
`;

export const NavSearch = styled.input`
    width: 160px; height: 38px;
    padding: 0 40px 0 20px; 
    margin-left: 20px;
    box-sizing: border-box;
    border: none; outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder{
        color: #999;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const Addition = styled.div`
    float: right;
    height: 56px;
    .switch-aa{
        float: right;
    }
    .switch-aa .icon-aa{ 
        line-height: 58px;
        padding: 0 10px 0 15px;
        font-size: 17px;
        color: #969696;
    }
    .login-in{
        float: right;
        margin: 0 6px 0 10px;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 12px;  
        line-height: 58px;
        color: #969696;
    }
    .user-wrap{
        float: right; position: relative;
    }
    .user-wrap .dropdown a{
        position: relative;
        display: inline-block;
        width: 40px; height: 40px;
        margin: 8px 28px 8px 20px;
    }
    .user-wrap .dropdown:hover{
        background: #f5f5f5;
    }
    .user-wrap .dropdown a::before {
        content: "";
        position: absolute;
        top: 18px;
        right: -14px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #999;
    }
    .user-wrap .dropdown img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .user-wrap ul{
        display: none;
        position: absolute; left: 0; top: 100%;
        min-width: 160px;  
        padding: 5px 0;
        font-size: 14px;
        text-align: left;
        background: #fff;
        border:1px solid rgba(0,0,0,.15); 
        border-color: transparent;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
        filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        border-radius: 0 0 4px 4px;
    }
    .user-wrap.user-open ul{
        display: block;
    }
    .user-wrap li a{
        display: block; 
        clear: both;
        font-weight: 400; 
        color: #333;
        padding: 10px 20px;
        line-height: 30px;
        white-space: nowrap;
        cursor: pointer;
    }
    .user-wrap li a:hover{
        background: #f5f5f5;
    }    
    .user-wrap li i{
        margin-right: 15px;
        font-size: 18px;
        color: #ea6f5a;
        vertical-align: top; 
    }
    .user-wrap li .icon-signout{ 
        font-weight: 700;
    }
    .user-wrap li .icon-like{
        font-size: 24px;
        margin-left: -3px;
        margin-right: 12px;
    }

    .reg, .writting{
        float: right; 
        padding: 0 20px;
        line-height: 38px;
        border-radius: 19px;
        border: 1px solid #ec6149;
    }
    .reg{
        color: #ec6149;
        background: #fff;
        margin: 9px 5px 0 15px;
    }
    .writting{
        color: #fff;
        background: #ec6149;
        margin: 9px 15px 0;
        cursor: pointer;
    }
`;
 
export const SearchInfo = styled.div`
    position: absolute; left: 20px; top: 50px; z-index: 10;
    width: 252px; 
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 5px;
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin: 15px 0 12px;
    padding: 0 20px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoKeyWord = styled.div` 
    padding: 0 10px 8px 20px;
    &::after{
        clear: both;
        content: '';
        display: block;
        width: 0; height: 0; visibility: hidden;
    }
`;

export const SearchKeyWordItem = styled.span`
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin: 0 10px 10px 0;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 5px;
`;

export const SearchInfoHistoryList = styled.div`
    border-top: 1px solid #f0f0f0;
    padding: 5px;
`;

export const SearchInfoHistoryItem = styled.div`
    position: relative;
    height: 40px; line-height: 40px;
    padding: 0 16px;
    font-size: 13px;
    color: #333;
    &:hover{
        background: #f0f0f0;
        border-radius: 3px;
    }  
    &.icon-shijian::before{
        display: inline-block; 
        margin-right: 10px; 
        width: 16px; height: 16px; 
        background: #f00;
        position: relative;
        top: 2px;
    } 
`;