import React, { Component, Fragment } from 'react';
import { WriterWrap } from './style';
import Header from '../../common/header';


class Writer extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <WriterWrap>
                    写文章模块-暂未开发...
                </WriterWrap>
            </Fragment> 
        );
    };
};

export default Writer;