import React, { Component } from 'react';
import { SwitchWrap } from './style';

class Switch extends Component {
    handleSwitch(input) {
        let originAngle = input.style.transform.replace(/[^0-9]/ig, ''); 
        originAngle = originAngle ? parseInt(originAngle, 10) : 0; 
        input.style.transform = 'rotate('+ (originAngle + 360) +'deg)';

        this.props.callback();
    }
    render() {
        return (
            <SwitchWrap className="style-switch">
                <div onClick = {() => this.handleSwitch(this.refInput)}>
                <span ref = {(input) => this.refInput = input } className="iconfont spin">&#xeaf4;</span>换一批
                </div> 
            </SwitchWrap>
        );
    };
};

export default Switch;