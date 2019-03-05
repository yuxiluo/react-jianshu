// 右侧菜单
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuWrap } from '../style';

class Menu extends Component {
    render() {
        const { list } = this.props;
        return (
            <MenuWrap> 
                {list.toJS().map((item) => {
                    return (
                        <Fragment key={item.id}>
                        {item.path ? 
                            <Link to={item.path}><img src = {item.imgUrl} alt="" /></Link>
                            :
                            <span><img src = {item.imgUrl} alt="" /></span>
                        } 
                        </Fragment>
                    );
                })} 
            </MenuWrap>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'menuList'])
    };
};

export default connect(
    mapStateToProps,
    null
)(Menu);