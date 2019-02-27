import React, { Component, Fragment } from 'react';
import { LoginWrap, LoginBg } from '../login/style'; 
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <Fragment> 
                <LoginBg></LoginBg>
                <LoginWrap className="login-wrap">
                    <div className="login-blank fl">
                        <img src={`${require('../../statics/login/blank.jpg')}`} alt="" />
                    </div>
                    <div className="login-info fr register-info">
                        <div className="logo"><Link to="/"><img src={`${require('../../statics/nav-logo.png')}`} alt="" /></Link></div>
                        <form action="" className="form-login">
                            <ul>
                                <li className="mb16">
                                    <span className="icon-name"></span>
                                    <input type="text" name="" className="form-input" placeholder="昵称将会显示在个人主页和评论里 " />
                                </li>
                                <li className="mb16">
                                    <span className="icon-phone"></span>
                                    <input type="text" name="" className="form-input" placeholder="请输入11位手机号码 " />
                                </li>
                                <li className="mb16">
                                    <span className="icon-yzm"></span>
                                    <input type="text" name="" className="form-input w193" placeholder="请输入11位手机号码 " />
                                    <input type="button" className="form-yzm form-sendyzm" value="发送验证码" />
                                </li>
                                <li className="mb16">
                                    <span className="icon-pw"></span>
                                    <input type="password" name="" className="form-input" placeholder="请输入登录密码（6位以上）" />
                                </li>
                                <li className="error-tips"> 
                                    <div><i className="icon-error"></i><em>请输入验证码</em></div> 
                                </li>
                                <li>
                                    <input type="button" className="form-button" value="注   册" />
                                    {/* <input type="button" className="form-button" value="正在注册..." /> */}
                                </li>
                                <li className="other-item">
                                    <div className="fl">
                                        已有帐号，<Link to="/login">立即登录</Link>
                                    </div>
                                 </li>
                            </ul>
                        </form>
                    </div>
                </LoginWrap>
            </Fragment> 
        );
    };
};

export default Register;