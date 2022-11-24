import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            first: 0,
            second: 0,
            result: 0
        }
    }

    // updateFirstHandler = (arg) => {
    //     this.setState({
    //         first: arg
    //     })
    // }
    // updateSecondHandler = (arg) => {
    //     this.setState({
    //         second: arg
    //     })
    // }

    // updateResultHandler = () => {
    //     this.setState(
    //         (currentState) => {
    //             let r = currentState.first + currentState.second
    //             return {
    //                 result: r
    //             }
    //         }
    //     )
    // }

    updateStateHandler = (propName, propValue) => {
        this.setState({
            [propName]: propValue
        })
    }
    render() {
        const { first, second, result } = this.state
        const design = (
            <table>
                <tr>
                    <td>First Value:&nbsp;</td>
                    <td>
                        <input
                            type='text'
                            value={first}
                            onChange={
                                (e) => {
                                    if (e.target.value && e.target.value !== '')
                                        this.updateStateHandler('first', (+e.target.value))
                                }
                            }></input>
                    </td>
                </tr>
                <tr>
                    <td>Second Value:&nbsp;</td>
                    <td>
                        <input
                            type='text'
                            value={second}
                            onChange={
                                (e) => {
                                    if (e.target.value && e.target.value !== '')
                                        this.updateStateHandler('second', (+e.target.value))
                                }
                            }></input>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button onClick={
                            () => {
                                this.updateStateHandler('result', (first + second))
                            }
                        }>Add</button>
                    </td>
                </tr>
                <tr>
                    <td>Result:&nbsp;</td>
                    <td>
                        <input type='text' value={result}></input>
                    </td>
                </tr>
            </table>
        )
        return design;
    }
}

export default Calculator
