import React, { Component, PureComponent } from 'react'

type NamePropsType = {
    nameData: string,
    nameDataHandler: (propName: string, propValue: string) => void
}
export default class Name extends PureComponent<NamePropsType, {}> {
    constructor(props: NamePropsType) {
        super(props)
        console.log('Name created')
    }
    render() {
        console.log('Name rendered')
        return (
            <div>
                Name:&nbsp;
                <input type='text' value={this.props.nameData} onChange={(e) => this.props.nameDataHandler('name', e.target.value)} />
            </div>
        )
    }
    componentDidMount(): void {
        console.log('Name mounted');
    }
    componentWillUnmount(): void {
        console.log('Name unmounted')
    }
}
