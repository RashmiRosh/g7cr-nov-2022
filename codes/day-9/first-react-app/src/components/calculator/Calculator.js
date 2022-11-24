import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'

const Calculator = () => {
    let first = 0
    let second = 0
    let result = 0

    const updateFirst = (arg) => {
        // console.log(arg)
        // if (arg.target.value && arg.target.value !== '')
        //     first = Number(arg.target.value)

        // console.log(first)
        first = arg
        console.log(first)
    }
    const updateSecond = (arg) => {
        second = arg
        console.log(second)
    }

    const design = (
        <table>
            <tr>
                <td>First Value:&nbsp;</td>
                <td>
                    <input type='text' defaultValue={first.toString()} onChange={
                        (e) => {
                            if (e.target.value && e.target.value !== '')
                                updateFirst(+e.target.value)
                        }
                    }></input>
                </td>
            </tr>
            <tr>
                <td>Second Value:&nbsp;</td>
                <td>
                    <input type='text' defaultValue={second.toString()} onChange={(e) => {
                        if (e.target.value && e.target.value !== '')
                            updateSecond(+e.target.value)
                    }}></input>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <button onClick={
                        () => {
                            result = first + second
                            console.log(result)
                        }
                    }>Add</button>
                </td>
            </tr>
            <tr>
                <td>Result:&nbsp;</td>
                <td>
                    <input type='text' defaultValue={result} value={result}></input>
                </td>
            </tr>
        </table>
    )

    return design;
}

export default Calculator
