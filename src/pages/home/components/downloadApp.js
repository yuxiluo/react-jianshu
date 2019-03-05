import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DownloadWrap } from '../style'; 

class DownLoadApp extends Component {
    render() {
        return (
            <DownloadWrap>
                <Link to="/download" className="download">
                <div className="qrcode">
                    <img src={require('../../../statics/download-qrcode.png')} alt="" />
                </div> 
                <div className="info">
                    <div className="title">下载简书手机App<i className="iconfont ic-link">&#xe728;</i></div>
                    <div className="description">随时随地发现和创作内容</div>
                </div>
                </Link>
            </DownloadWrap>
        );
    };
};

export default DownLoadApp;