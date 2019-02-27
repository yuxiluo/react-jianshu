// 推荐作者
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreates } from './store';
import { RecommendWrap } from './style';
import Switch from '../switch';

class Recommend extends Component {
    componentDidMount() { 
        this.props.getAuthorRecommend(this.props.page);
    }
    render() {
        const { list, page, getAuthorRecommend } = this.props;
        return (
            <RecommendWrap>
                <div className="title">
                    <span>推荐作者</span> 
                    <Switch callback = {getAuthorRecommend.bind(this, page)} /> 
                </div>
                <ul className="author-list">
                    {list.toJS().map((item) => {
                        let getSize = (size) => {
                            return (size > 1000) ? Math.floor(size/1000*10) / 10 + 'k' : size;
                        }
                        return (
                            <li key={item.id} data-id={item.id}>
                                <a href="#" target="_blank" className="avatar"><img src={item.imgUrl} alt="" /></a> 
                                <a className="follow" state="0"><i className="iconfont ic-follow">&#xe61c;</i>关注</a> 
                                <a href="#" target="_blank" className="name">{item.name}</a> 
                                <p>写了{getSize(item.size)}字 {(item.link > 0) && '· '+getSize(item.link)+'喜欢'}</p>
                            </li> 
                        );
                    })} 
                </ul>
                <div className="find-more">查看全部<i className="iconfont">&#xe728;</i></div>
            </RecommendWrap>
        );
    };
};

const mapStateToProps = (state) => {   
    return {
        list: state.getIn(['recommend', 'authorRecommend']),
        page: state.getIn(['recommend', 'page'])
    };
};

const mapDispatchToProps = (dispatch) => ({
    getAuthorRecommend(page) {    
        dispatch(actionCreates.getRecommend(page + 1));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recommend);