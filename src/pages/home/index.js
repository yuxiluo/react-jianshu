import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreates } from './store';

import Header from '../../common/header';
import Footer from '../../common/footer';
import ArticleList from '../../common/articleList';
import Swiper from './components/swiper';
import Special from './components/special';
import Menu from './components/menu';
// 推荐作者
import AuthorRecommend from '../../common/recommend';
import DownloadApp from './components/downloadApp';

import {
    HomeWrap,
    HomeLeftPlate,
    HomeRightPlate
} from './style';

class Home extends Component { 
    componentDidMount() { 
        this.props.getHomeData();
        document.title = '简书 - 创作你的创作';
    } 
    render() {
        return (
            <React.Fragment>
                <Header />  
                <HomeWrap>
                    <HomeLeftPlate>
                        <Swiper />
                        <Special />
                        <ArticleList />
                    </HomeLeftPlate>
                    <HomeRightPlate>
                        <Menu />
                        <DownloadApp />
                        <AuthorRecommend />
                    </HomeRightPlate> 
                </HomeWrap> 
                <Footer />
            </React.Fragment> 
        );
    };
};
  
const mapDispatchToProps = (dispatch) => ({
    getHomeData () { 
        dispatch(actionCreates.getHomeInfo());
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Home);