// 顶部轮播图
import React, { Component } from 'react';
import bannerPic1 from '../../../statics/hpic01.jpeg';
import bannerPic2 from '../../../statics/hpic02.jpg';
import './swiper.css'; 
import Slider from "react-slick";

 
class Swiper extends Component {
    render() { 
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500
        };
        return ( 
            <div className="bannerWrap"> 
                <Slider {...settings}>
                <div> 
                    <img src={bannerPic1} alt="" /> 
                </div>
                <div>
                    <img src={bannerPic2} alt="" /> 
                </div>
                <div> 
                    <img src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" /> 
                </div>
                <div>
                    <img src="//upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" /> 
                </div> 
                </Slider>
            </div>
        );
    };
};

export default Swiper;