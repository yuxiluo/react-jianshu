import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreates } from './store';
import Header from '../../common/header';
import { 
    RootDetailWrap, 
    DetailWrap 
} from './style';

class Detail extends Component { 
    render() { 
        const artcile = this.props.artcile.toJS();
        const author = this.props.author.toJS();
        return (
            <RootDetailWrap> 
                <Header /> 
                <DetailWrap>
                    <h1 className="title">{artcile.title}</h1>

                    {author.userName && 
                        <div className="author">
                            <Link to={'/detail/' + artcile.id} className="avatar">
                                <img src={author.imgUrl} alt="96" />
                            </Link>          
                            <div className="info">
                                <span className="name"><Link to={'/detail/' + artcile.id}>{author.userName}</Link></span>  
                                <div className="btn follow">
                                    <i className="iconfont ic-follow">&#xe61c;</i>
                                    <span>关注</span>
                                    {/* <span>{author.follow > 0 ? '已关注' : '关注' }</span> */}
                                </div> 
                                <div className="meta"> 
                                    {(author.paid > 0) && (
                                        <span className="jsd-meta">
                                            <i className="iconfont ic-paid1"></i> {author.paid}
                                        </span>
                                    )} 
                                    <span className="publish-time">{author.time}</span>
                                    <span className="wordage">字数 {author.size}</span>
                                    <span className="views-count">阅读 {author.read}</span>
                                    {(author.comment > 0) && <span className="comments-count">评论 {author.comment}</span>}
                                    {(author.like > 0) && <span className="likes-count">喜欢 {author.like}</span>} 
                                </div>
                            </div>
                        </div>
                    }

                    <div className="show-content-free" 
                        dangerouslySetInnerHTML={{__html: artcile.content}}> 
                    </div>
                    <div className="fixed-ad-container">
                        <div className="plate-one">
                            <img src={require('../../statics/web-note-ad-side-banner.png')} alt="" />
                        </div>
                        <div className="plate-ad">
                            <img src={require('../../statics/image.jpg')} alt="" />
                            <span>广告</span>
                        </div>
                    </div>
                </DetailWrap>  
            </RootDetailWrap>
        );
    };

    componentDidMount() {   
        const detailId = this.props.match.params.id;
        this.props.getDetailInfo(detailId);  
    }
    componentDidUpdate() {
        const artcile = this.props.artcile.toJS();
        document.title = artcile.title;
    }
};

const mapStateToProps = (state) => ({ 
    author: state.getIn(['detail', 'author']),
    artcile: state.getIn(['detail', 'artcile'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetailInfo(id) { 
        dispatch(actionCreates.getDetailData(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);