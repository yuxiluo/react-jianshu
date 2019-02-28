import styled from 'styled-components';

export const LoginBg = styled.div`
    background: #f3f1f2 url(${require('../../statics/login/background.jpg')}) repeat left top;
    width: 100%; height: 100%;
    position: absolute;  
`;

export const LoginWrap = styled.div` 
    .fl{ float: left; }
    .fr{ float: right; } 
    &.login-wrap{
        width:1000px; height: 460px; margin-left:-500px; margin-top:-230px;
        background:#fff; position:absolute; left:50%; top:50%;
        box-shadow: 0 0 10px 1px #dadada;
    }
    .login-blank{ 
        width:604px; height:100%; overflow:hidden;
    }
    .login-blank img{ 
        width:100%; height: 100%;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    } 

    .login-info{
        width: 280px; height:412px; position:relative;
        padding:38px 58px 10px;
    }
    .login-info .logo{ 
        margin-bottom:26px; 
        height: 55px;
        overflow: hidden;
        text-align: center;
    }
    .login-info .logo img{
        margin-top: -26px;
        height: 110px;
    }
    .login-info .slogan,
    .login-dialog .slogan{
        position:absolute; left:0; right:0;bottom:0;
        height:36px; line-height:36px; z-index:2;
        text-align:center; color: #cacaca;
        background: #fbfbfb; font-size:12px;
    }

    .form-login li{
        vertical-align:top;
        height: 46px;
        line-height: 46px;
        border-radius: 2px;
        position: relative;
    }
    .form-login li span{
        border: 1px solid #cdcfd1;
        width: 44px;
        height: 44px;
        float: left;
        border-radius: 2px 0 0 2px; 
    }
    .form-login li span.icon-name{
        
        background: url(${require('../../statics/login/icon-name.png')}) no-repeat center;
    }
    .form-login li span.icon-pw{
        background: url(${require('../../statics/login/icon-pw.png')}) no-repeat center;
    }
    .form-login li span.icon-phone{
        background: url(${require('../../statics/login/icon-phone.png')}) no-repeat center;
    }
    .form-login li span.icon-yzm{
        background: url(${require('../../statics/login/icon-yzm.png')}) no-repeat center;
    }

    .form-login .form-input{
        height: 44px;
        width: 265px;
        float: left;
        padding: 0 10px;
        border: 1px solid #cdcfd1;
        border-left: none;
    }
    .form-login .w213{
        width: 213px;
    }
    .form-login .mb16{
        margin-bottom:16px;
    }
    .form-login .form-button{
        width: 332px;
        height: 46px;
        background: #4786ff;
        font-size: 16px;
        border: 0;
        color: #fff;
        display: inline-block;
        cursor: pointer;
        box-shadow: 0 0 10px 1px #b5ceff;
        border-radius: 2px;
    }
    .form-login .w280{
        width:280px;
    }
    .form-login a{ color:#666; }
    .form-login a:hover { color: #4786ff; text-decoration: none; }

    .form-login .error-tips{
        text-align: center;
        color: #ff0000;
        font-size: 12px;
        height: auto;
        width: 330px;
        background: #ffe7e1;
        border: 1px solid #fc4c24;
        line-height: 18px;
        margin-bottom: 16px;
        padding: 6px 0;
    }
    .form-login .error-tips.w278{
        width: 278px;
    }
    .form-login .error-tips .icon-error{
        width: 18px;
        height: 18px;
        background: url(${require('../../statics/login/icon-error.png')}) no-repeat;
        display: inline-block;
        margin: -2px 6px 0 0;
        vertical-align: middle;
    }
    .form-login .other-item{
        color: #c3c5c7;
        font-size: 14px;
    }
    .form-login .other-item a{ 
        color: #666;
    }
    .form-login .other-item a:hover{ 
        color: #4786ff;
    }

    /*注册*/
    .register-info{
        width: 332px;
        padding:20px 32px 10px;
    }
    .form-login .w193{ width: 163px; }
    .form-login .form-yzm{
        width: 94px;
        height: 46px;
        background: #e0e2e5;
        display: block;
        border: none;
        color: #999;
        float: right;
        border-radius: 2px; 
    }
    .form-login .form-sendyzm{
        box-shadow: 0 0 10px 1px #b5ceff;
        background: #4786ff;
        color: #fff;
        cursor: pointer;
    }
    .register-info .logo{ margin-bottom:16px; }
    .register-info .mb16{ margin-bottom:12px; }
`;