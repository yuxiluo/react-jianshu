import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../common/header';

import { RecommendListWrap } from './style';
import { actionCreates } from './store';


class RecommendList extends Component { 
    componentDidMount() {
        this.props.getAuthorList();
        document.title = '推荐作者 - 简书';
    } 
    render() {
        const { loadMore, list, page, getAuthorList } = this.props;
        return (
            <Fragment>
                <Header />
                <RecommendListWrap> 
                    <div className="column-title">
                        <span className="help"><i className="iconfont ic-follow">&#xe62e;</i> 如何成为签约作者</span>
                    </div>
                    <div className="column-list">
                        <ul>
                            {list.toJS().map((item) => {
                                return (
                                    <li key={item.id}>
                                        <div className="author-item">
                                            <Link to="/recommendlist">
                                                <img className="pic" src={item.imgUrl} alt="180" />
                                                <h4 className="name">
                                                    {item.name} 
                                                    {(item.sex === 0) && <i className="iconfont ic-woman">&#xe61f;</i>}
                                                    {(item.sex === 1) && <i className="iconfont ic-man">&#xe612;</i>} 
                                                </h4>
                                                <p className="des">{item.description}</p>
                                            </Link>
                                            <Link to="/recommendlist" className="btn"><i className="iconfont ic-follow">&#xe61c;</i> <span>关注</span></Link>
                                            <div className="meta"><span>最近更新</span><i></i></div>
                                            <div className="recent-update">
                                                {item.update.map((childItem) => {
                                                    return <Link to="/recommendlist" key={childItem.id} className="new">{childItem.title}</Link>;
                                                })} 
                                            </div>
                                        </div>
                                    </li> 
                                );
                            })} 
                        </ul>
                    </div>
                    {loadMore && <span className="load-more" onClick={() => getAuthorList(page + 1)}>加载更多</span>}  
                    {!loadMore && list.toJS().length > 0 && <div className="base-line"><span>我是有底线的</span></div>}
                </RecommendListWrap>
            </Fragment>
        );
    };
};

const mapStateToProps = (state) => ({
    list: state.getIn(['recommendAuthor', 'authorList']),
    loadMore: state.getIn(['recommendAuthor', 'loadMore']),
    page: state.getIn(['recommendAuthor', 'page'])
});

const mapDispatchToProps = (dispatch) => ({
    getAuthorList(page) {
        const nextPage = page || 1;
        dispatch(actionCreates.getAuthorListData(nextPage)); 
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecommendList);