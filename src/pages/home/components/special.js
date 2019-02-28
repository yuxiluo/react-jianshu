// 专题列表
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SpecialWrap
} from '../style';

class Special extends Component {
    render() { 
        const { list } = this.props;
        return (
            <SpecialWrap>
                <ul>
                    {list.toJS().map((item) => { 
                        return (
                            <li key={item.id}>
                                <img className="imgpic" alt="" src = {item.imgUrl} />
                                <span>{item.title}</span>
                            </li> 
                        );
                    })} 
                    <li className="more">
                        更多热门专题 >
                    </li>    
                </ul>            
            </SpecialWrap>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'specialList'])
    };
};

export default connect(
    mapStateToProps,
    null
)(Special);