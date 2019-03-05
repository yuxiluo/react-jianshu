import styled from 'styled-components';

export const RootDetailWrap = styled.div`
    position: relative;
    padding-top: 10px;
`;

export const DetailWrap = styled.div`
    position: relative;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 620px;
    .title {
        word-break: break-word!important;
        word-break: break-all;
        margin: 20px 0 0;
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
    }
    .author {
        margin: 30px 0 40px;
    }
    .author .jsd-meta {
        color: #ea6f5a;
    }
    .author .avatar {
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
    }
    .author .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .author .info {
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
    }
    .author .name {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
    }
    .author .name a{
        color: #333;
    }
    .author .follow{
        display: inline-block;
        padding: 2px 7px 2px 5px;
        font-size: 12px;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        border: 1px solid #42c02e;
        cursor: pointer;
        margin: 0 0 4px 8px;
    }
    .author .follow i{
        font-size: 13px; 
        margin-right: 3px;
    }

    .author .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
    .author .meta span {
        padding-right: 5px;
    }

    .show-content-free{
        color: #2f2f2f;
        word-break: break-word!important;
        word-break: break-all;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
    } 
    .show-content-free p{
        margin: 0 0 25px;
    }
    .show-content-free .image-view{
        overflow: hidden;
    }
    .show-content-free .image-view img{
        padding-bottom: 25px;
        width: 100%;     
        vertical-align: top; 
        text-align: center;
    }
    .show-content-free b,
    .show-content-free strong{
        font-weight: 700;
    }
 
    .fixed-ad-container{
        position: fixed;
        top: 80px;
        right: 50%;
        margin-right: -560px;
        width: 180px;
    } 
    .fixed-ad-container img{
        width: 100%; vertical-align: top;
    } 
    .fixed-ad-container .plate-one{ 
        width: 100%;
        height: 260px;  
        margin-bottom: 15px;
    }
    .fixed-ad-container .plate-ad{
        width: 100%; margin-bottom: 15px;
        position: relative;
    }
    .fixed-ad-container .plate-ad span{
        position: absolute; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.5); color: #fff;
        font-size:13px; padding: 3px 5px;
    }
`;