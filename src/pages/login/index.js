import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { actionCreates } from './store';

import { LoginWrap, LoginBg } from './style';

class Login extends Component { 
    componentDidMount() {
        document.body.style = "padding-top:0;";
        document.title = '登录 - 简书';
    }
    render() {
        const { login, logining, errorTips, handleLogin } = this.props;
 
        if(this.password !== undefined && errorTips) { 
            this.password.value = '';
        }

        return (
            <Fragment>
            <LoginBg></LoginBg>
            {login ? 
                <Redirect to="/" /> : 
                <LoginWrap className="login-wrap">
                    <div className="login-blank fl">
                        <img src={`${require('../../statics/login/blank.jpg')}`} alt="" />
                    </div>

                    <div className="login-info fr">
                        <div className="logo"><Link to="/"><img src={`${require('../../statics/nav-logo.png')}`} alt="" /></Link></div>
                        <form action="" className="form-login">
                            <ul>
                                <li className="mb16">
                                    <span className="icon-name"></span>
                                    <input type="text" name="" className="form-input w213" placeholder="用户名、邮箱、手机 "
                                        ref={(input) => this.account = input}
                                    />
                                </li>
                                <li className="mb16">
                                    <span className="icon-pw"></span>
                                    <input type="password" name="" className="form-input w213" placeholder="登录密码 "
                                        ref={(input) => this.password = input}
                                    />
                                </li>
                                
                                {errorTips && 
                                    <li className="error-tips w278"> 
                                        <div><i className="icon-error"></i><em>{errorTips}</em></div> 
                                    </li>
                                } 

                                <li>
                                    {logining ? 
                                        <input type="button" className="form-button w280" value="正在登录..." /> :
                                        <input type="button" className="form-button w280" value="立即登录" 
                                            onClick = {() => handleLogin(this.account, this.password)}
                                        /> 
                                    } 
                                </li>
                                <li className="other-item">
                                    <div className="fl">
                                        没有账号？
                                        <Link to="/register">立即注册</Link> 
                                    </div>
                                    <Link to="/" className="fr">忘记密码?</Link>
                            </li>
                            </ul>
                        </form>
                        <div className="slogan">
                            随时随地发现和创作内容
                        </div>
                    </div>
                </LoginWrap>          
            } 
            </Fragment>
        );
    };
};

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login']),
    logining: state.getIn(['login', 'logining']),
    errorTips: state.getIn(['login', 'errorTips'])
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin(accountElem, passwordElem) { 
        let account = accountElem.value.replace(/\s+/g, '');
        let password = passwordElem.value; 

        if(account.length === 0) { 
            return accountElem.focus();
        } 
        if(password.length === 0) { 
            return passwordElem.focus();
        }
        dispatch(actionCreates.logining());
        setTimeout(function() {
            dispatch(actionCreates.login(account, password));
        }, 1000); 
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);