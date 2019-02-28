import React, { Component } from 'react';
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
                            <a className="avatar" href="/u/e78878c4a4af">
                                <img src={author.imgUrl} alt="96" />
                            </a>          
                            <div className="info">
                                <span className="name"><a href="/u/e78878c4a4af">{author.userName}</a></span>  
                                <a className="btn btn-success follow">
                                    <i className="iconfont ic-follow"></i>
                                    <span>{author.follow > 0 ? '已关注' : '关注' }</span>
                                </a> 
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