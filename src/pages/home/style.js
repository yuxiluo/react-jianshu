import styled from 'styled-components';

export const HomeWrap = styled.div` 
    width: 960px;
    margin: 0 auto; 
    overflow: hidden;
`;

export const HomeLeftPlate = styled.div`
    float: left;
    width: 66.6666%;
    padding-top: 30px; 
    .bannerWrap{
        position: relative;
    }
    .bannerWrap img{
        width: 100%;
        height: 270px;
        vertical-align: top; 
    }
`;

export const HomeRightPlate = styled.div`
    float: right;
    width: 29.16667%;
    padding-top: 30px; 
`;

// 专题列表
export const SpecialWrap = styled.div`
    width: 100%; 
    overflow: hidden;
    padding-top: 20px;
    ul{ 
        margin-left: -15px;
    }
    ul::after{
        display: block;
        clear: both;
        content: '';
        width: 0; height: 0; visibility: hidden;
    }
    li{
        float: left;
        background: #f2f2f2;
        height: 30px; line-height:30px;
        margin: 10px 0 0 15px;
        border: 1px solid #dadada;
        border-radius: 5px;
        font-size: 12px; 
        color: #666;
    }
    li.more{
        border: 0;
        background: none;
    }
    li .imgpic{
        float: left;
        width: 30px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: #fff;
    }
    li span {
        padding: 0 8px;
    }
`;

// 右侧图片菜单
export const MenuWrap = styled.div` 
    margin-top: -4px;
    padding-bottom: 4px;
    width: 280px;
    min-height: 228px; 
    img{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
    }
`;
 







