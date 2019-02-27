import React, { Component } from 'react';
import { FooterWrap } from './style';

class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <div className="footer-menu">
                关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴
                </div>
                <p>
                ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /  Smrz  沪公网安备31010402002252号 /
                </p>
                <p>举报电话：021-34770013</p>  
            </FooterWrap>
        );
    };
};

export default Footer;