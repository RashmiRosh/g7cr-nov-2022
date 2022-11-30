import React, { useState } from 'react'
import Name from './Name'
import ProductList from './ProductList'
import Value from './Value'

const Parent = () => {
    console.log('Parent rendered');
    const [valueState, setValueState] = useState<number>(0)
    const [nameState, setNameState] = useState<string>('')
    const [showState, setShowState] = useState<boolean>(false)

    const valueStateHandler = () => {
        setValueState(
            oldValue => oldValue + 1
        )
    }
    const nameStateHandler = (name: string) => {
        setNameState(name)
    }
    return (
        <div>
            <button onClick={
                () => {
                    setShowState(oldStatus => !oldStatus)
                }
            }>
                {showState ? 'Hide' : 'Show'}
            </button>
            <br />
            {
                showState && <Value valueData={valueState} valueDataHandler={valueStateHandler} />
            }
            <br />
            <br />
            <Name nameData={nameState} nameDataHandler={nameStateHandler} />
            <br />
            <br />
            <ProductList />
        </div>
    )
}

export default Parent