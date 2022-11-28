import React, { Component } from 'react'
import Click from './Click';
import Hover from './Hover';

type ParentStateType = {
    value: number,
}
type ParentPropsType = {

}
export default class Parent extends Component<ParentPropsType, ParentStateType> {
    state: Readonly<ParentStateType> = {
        value: 0,
    }
    valueHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    value: currentState.value + 1
                }
            }
        )
    }

    render() {
        return (
            <div>
                {/* <Hover valueData={this.state.value} valueHandlerFn={this.valueHandler} />
                <br />
                <br />
                <Click valueInfo={this.state.value} valueHandlerFn={this.valueHandler} /> */}
            </div>
        )
    }
}
