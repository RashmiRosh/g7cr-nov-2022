import React, { Component } from 'react'
import { ComponentPropTypes } from '../prop-types/compnent-prop-types';
import withValue from './withValue';

/*
type ClickStateType = {
    value: number;
}
type ClickPropType = {

}
export default class Click extends Component<ClickPropType, ClickStateType> {
    state: Readonly<ClickStateType> = {
        value: 0
    }
    valueHandler = () => {
        this.setState(
            (oldState) => {
                return {
                    value: oldState.value + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                <span>Click Value:&nbsp;{this.state.value}</span>
                <br />
                <button type='button' onClick={this.valueHandler}>Increase Value</button>
            </div>
        )
    }
}
*/
let OriginalClick = (props: ComponentPropTypes) => {
    return (
        <div>
            <span>Click Value:&nbsp;{props.valueData}</span>
            <br />
            <button type='button' onClick={props.valueHandlerFn}>Increase Value</button>
        </div>
    )
}
const Click = withValue(OriginalClick)
export default Click

