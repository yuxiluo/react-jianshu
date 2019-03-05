// 首页列表
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreates } from './store';
import { ListWrap } from './style';

class ArticleList extends Component { 
    handleLoadMore = () => { 
        const { handleArticleList, page } = this.props;
        handleArticleList(page); 
    } 

    componentDidMount() {
        this.props.handleArticleList(0); 
    }

    render() { 
        const { list, articleLoad } = this.props;
        return (
            <ListWrap style={this.props.setStyle}>
                <ul>
                    {list.toJS().map((item) => {
                        return (
                            <li className = {`items ${item.imgUrl && 'haspic'}`} key = {item.id}>
                                {item.imgUrl && (
                                    <Link to={'/detail/' + item.id } target="_blank" className="wrap-img">
                                        <img src = {item.imgUrl} alt="" />
                                    </Link>
                                )}
                                
                                <div className="content">
                                    <Link to={'/detail/' + item.id } className="title" target="_blank">{item.title}</Link> 
                                    <p className="abstract">{item.desc}</p>
                                    <div className="meta">
                                        {(item.paid > 0) && <span className="jsd-meta">
                                            <i className="iconfont icon-zuan">&#xe63c;</i> {item.paid}
                                        </span>}
                                        
                                        <a className="nickname" target="_blank" href="/u/a6c6fd7d1294">{item.author.name}</a>
                                        <a target="_blank" href="/p/c22b6d5ab9f2#comments">
                                            <i className="iconfont icon-comments">&#xe6cb;</i> {item.comments}
                                        </a>  
                                        {(item.links > 0) && <span><i className="iconfont icon-like">&#xe742;</i> {item.links}</span> } 
                                        {(item.money > 0) && <span><i className="iconfont icon-money">&#xe611;</i> {item.money}</span>}   
                                    </div>
                                </div>
                            </li>
                        );
                    })} 
                </ul>
                {articleLoad ? 
                    <div 
                        className="read-more"
                        onClick = {this.handleLoadMore}
                    >阅读更多</div>
                    :
                    <div className="base-line"><span>我是有底线的</span></div>
                } 
            </ListWrap>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['articleList', 'articleList']),
        page: state.getIn(['articleList', 'articlePage']),
        articleLoad: state.getIn(['articleList', 'articleLoad'])
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleArticleList(page) { 
        dispatch(actionCreates.getArticleData(page)); 
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList);