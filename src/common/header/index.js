import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreates } from './store';
import { actionCreates as loginActionCreates } from '../../pages/login/store';
import SearchDropDown from './searchInfo';
import {
    HeaderWrap,
    LogoPic,
    NavWrap, 
    SearchWrap,
    NavSearch,
    Addition
} from './style';

class Header extends Component {  
    constructor(...props) {
        super(...props);
        this.state = {
            dropdown: false
        };
    }

    handleDropDown = (dropState) => { 
        this.setState({
            dropdown: dropState
        });
    }

    handleWriter = () => {
        console.log('写文章') 
    }

    render() { 
        const { focused, list, searchShow, page, totalPage, login, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage, handleLogout } = this.props;
        return (
            <HeaderWrap>
                <div className="header-content">
                    <Link to="/"><LogoPic /></Link>
                    <Addition> 
                        <a className="writting"
                            onClick = {this.handleWriter}
                        >写文章</a>
                        {!login && <Link to="/register" className="reg">注册</Link>} 
                         
                        {login ? 
                            <div className={`user-wrap ${this.state.dropdown && 'user-open'}`}
                                onMouseEnter = {() => this.handleDropDown(true)}
                                onMouseLeave = {() => this.handleDropDown(false)}
                            >
                                <div className="dropdown">
                                    <a href=""><img src="//upload.jianshu.io/users/upload_avatars/16493538/dd4998fc-1507-43c3-aaf3-937db79375e1?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="" /></a>
                                </div>
                                <ul> 
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe695;</i><span>我的主页</span>
                                        </a>          
                                    </li>
                                    <li> 
                                        <a>
                                            <i className="iconfont">&#xe610;</i><span>收藏的文章</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont icon-like">&#xe742;</i><span>喜欢的文章</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe62b;</i><span>已购内容</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe605;</i><span>我的钱包</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe63c;</i><span>我的简书钻</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe604;</i><span>设置</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont">&#xe6bd;</i><span>帮助与反馈</span>
                                        </a>          
                                    </li>
                                    <li>
                                        <a onClick = {handleLogout}>
                                            <i className="iconfont icon-signout">&#xe713;</i><span>退出</span>
                                        </a>          
                                    </li>
                                </ul>
                            </div> 
                            : <Link to="/login" className="login-in">登录</Link>
                        } 

                        <div className="switch-aa">
                            <span className="iconfont icon-aa">&#xe636;</span>
                        </div> 
                    </Addition>
                    <NavWrap>
                        <ul className="navbar">
                            {login ?
                                (
                                <Fragment>
                                    <li>
                                        <NavLink exact to="/" className="navitem active">发现</NavLink>
                                    </li>
                                    <li>
                                        <a href="" className="navitem">关注</a>
                                    </li>
                                    <li>
                                        <a href="" className="navitem">消息</a>
                                    </li>
                                </Fragment>
                                ) : (
                                <Fragment>
                                    <li>
                                    <NavLink exact to="/" className="navitem active" activeClassName="active">首页</NavLink>
                                    </li>
                                    <li><NavLink exact to="/download" className="navitem" activeClassName="active">下载APP</NavLink></li> 
                                </Fragment> 
                                )
                            } 
                        </ul>   
                        <SearchWrap className = {focused ? 'focused' : ''}>
                            <CSSTransition
                                in = {focused}
                                timeout = {200}
                                classNames = 'slide'
                            >
                                <NavSearch 
                                    placeholder="搜索"
                                    className="search-input"
                                    onFocus = {handleInputFocus.bind(this, list)}
                                    onBlur = {handleInputBlur}
                                ></NavSearch>
                            </CSSTransition> 
                            <span className="iconfont icon-search">&#xe614;</span>
                            {(focused || searchShow ) ? 
                                <SearchDropDown 
                                    list = {list} 
                                    page = {page} 
                                    totalPage = {totalPage}
                                    mouseEnter = {handleMouseEnter}
                                    mouseLeave = {handleMouseLeave}
                                    handlePage = {handleChangePage}
                                /> : ''} 
                        </SearchWrap> 
                    </NavWrap> 
                </div>
            </HeaderWrap>
        );
    };
};
 
const mapStateToProps = (state) => {   
    return {
        login: state.getIn(['login', 'login']),
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        searchShow: state.getIn(['header', 'searchShow']),
        totalPage: state.getIn(['header', 'totalPage']),
        page: state.getIn(['header', 'page'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreates.getSearchList()); 
            dispatch(actionCreates.searchFocus());
        },
        handleInputBlur() { 
            dispatch(actionCreates.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreates.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreates.mouseLeave()); 
        },
        handleChangePage(page, totalPage) {    
            let curPage = (page < totalPage) ? (page + 1) : 1; 
            dispatch(actionCreates.changePage(curPage)); 
        },
        handleLogout() { 
            dispatch(loginActionCreates.logout());
        }
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);