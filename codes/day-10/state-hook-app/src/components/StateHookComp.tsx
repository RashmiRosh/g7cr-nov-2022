import React, { useState } from 'react'

interface StateHookCompStateType {
    name: string;
    value: number;
}
const StateHookComp = () => {
    console.log('rendered')

    const [valueState, setValueState] = useState<number>(0)
    const [nameState, setNameState] = useState<string>('')
    const [objState, objSetState] = useState<StateHookCompStateType>({ name: 'anil', value: 100 })

    const valueStateHandler = () => {
        setValueState(
            (oldValue) => oldValue + 1
        )
    }
    const nameStateHandler = (newName: string) => {
        setNameState(newName)
    }

    const objStateHandler = (propName?: string, propValue?: number | string) => {
        objSetState(
            (oldState) => {
                if (propName)
                    return {
                        ...oldState,
                        [propName]: propValue
                    }
                else
                    return {
                        ...oldState,
                        value: oldState.value ? (oldState.value + 1) : 0
                    }
            }
        )
    }
    return (
        <div>
            <div>
                Value:&nbsp;{valueState}
                <br />
                <button type='button' onClick={valueStateHandler}>Increase</button>
            </div>
            <br />
            <br />
            <div>
                <label htmlFor="txtName">Name:&nbsp;</label>
                <input type="text" value={nameState} onChange={(e) => nameStateHandler(e.target.value)} id='txtName' />
            </div>
            <br />
            <br />
            <div>
                Obj Value:&nbsp;{objState.value}
                <br />
                Obj Name:&nbsp;{objState.name}
                <br />
                <label htmlFor="txtObjName">Obj Name:&nbsp;</label>
                <input type="text" value={nameState} onChange={(e) => {
                    objStateHandler('name', e.target.value)
                }} id='txtObjName' />
                <br />
                <button type='button' onClick={
                    () => objStateHandler()
                }>Update Obj State</button>
            </div>
        </div>
    )
}

export default StateHookComp