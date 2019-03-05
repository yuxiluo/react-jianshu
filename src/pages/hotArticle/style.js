import styled from 'styled-components';

export const HotWrap = styled.div`
    width: 960px;
    margin: 0 auto;
    background: #f00;
    .hot-left{
        float: left;
        padding-top: 30px;
        width: 625px; 
    }
    .hot-title{
        width: 100%;
        height: 100px;
    }
    .hot-title img{ 
        vertical-align: top;
        max-width: 100%;
    }


    .hot-right{
        float: right;
        width: 280px;
        padding-top: 10px;
    }
`;