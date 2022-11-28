import React, { Component } from 'react'
import { ComponentPropTypes } from '../prop-types/compnent-prop-types'
import withValue from './withValue'

/*
type HoverStateType = {
    value: number;
}
type HoverPropType = {

}
export default class Hover extends Component<HoverPropType, HoverStateType> {
    state: Readonly<HoverStateType> = {
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
            <div onMouseOver={this.valueHandler}>
                <span>Hover Value:&nbsp;{this.state.value}</span>
                <br />
            </div>
        )
    }
}
*/
let OriginalHover = (props: ComponentPropTypes) => {
    return (
        <div>
            <div onMouseOver={props.valueHandlerFn}>
                <span>Hover Value:&nbsp;{props.valueData}</span>
                <br />
            </div>
        </div>
    )
}
const Hover = withValue(OriginalHover)
export default Hover
