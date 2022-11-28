import React from 'react'

type ValuePropsType = {
    valueData: number,
    valueDataHandler: () => void
}
const Value = ({ valueData, valueDataHandler }: ValuePropsType) => {
    console.log('Value rendered');
    return (
        <div>
            Value:&nbsp;{valueData}
            <br />
            <button type='button' onClick={() => valueDataHandler()}>Increase Value By 1</button>
        </div>
    )
}

export default Value