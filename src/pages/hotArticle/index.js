import React, { Component, Fragment } from 'react';

import Header from '../../common/header';
import ArticleList from '../../common/articleList';
import Recommend from '../../common/recommend';
import { HotWrap } from './style';

class HotArticle extends Component {
    constructor(...props) {
        super(...props); 
        const pathname = this.props.location.pathname;
        let titleData = {
                hottitleImg: require('../../statics/seven-hot.png'),
                hottitleAlt: '7日热门'
            }
        if(pathname.slice(1) === 'monthly') {
            titleData = {
                hottitleImg: require('../../statics/thirty-hot.png'),
                hottitleAlt: '30日热门'
            }
        }
        this.state = titleData;
        document.title = titleData.hottitleAlt + ' - 简书';
    }
    render() {
        const { hottitleImg, hottitleAlt } = this.state;
        return (
            <Fragment>
                <Header />
                <HotWrap>
                    <div className="hot-left">
                        <div className="hot-title">
                            <img src={hottitleImg} alt={hottitleAlt} />
                        </div>
                        <ArticleList setStyle={{borderTop: "none", paddingTop: 0}} />
                    </div>
                    <div className="hot-right">
                        <Recommend />
                    </div>
                </HotWrap>
            </Fragment> 
        );
    };
};

export default HotArticle;