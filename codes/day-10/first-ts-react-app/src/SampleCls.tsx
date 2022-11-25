import React, { Component } from 'react'

type stateType = {
    first: number;
    second: number;
    result: number;
}
type propType = {
    value: number
}
export default class SampleCls extends Component<propType, stateType> {
    // constructor(props: propType) {
    //     super(props)
    //     console.log(this.props)
    // }
    state = {
        first: 0,
        second: 0,
        result: 0
    }
    render() {
        //console.log(this.props);
        return (
            <div>SampleCls</div>
        )
    }
}
/*
export default class SampleCls extends Component {
    state: stateType = {
        first: 0,
        second: 0,
        result: 0
    }
    render() {
        return (
            <div>SampleCls</div>
        )
    }
}
*/