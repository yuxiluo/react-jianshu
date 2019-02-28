// 顶部轮播图
import React, { Component } from 'react';
import bannerPic1 from '../../../statics/hpic01.jpeg';
import bannerPic2 from '../../../statics/hpic02.jpg';
import './swiper.css'; 
import Slider from "react-slick";

 
class Swiper extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
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
                </Slider>
            </div>
        );
    };
};

export default Swiper;