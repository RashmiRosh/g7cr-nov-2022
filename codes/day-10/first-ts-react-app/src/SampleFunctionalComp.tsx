import React from 'react'
import { SamplePropTypes } from './propTypes.model'

type samplePropTypes = {
    propObj: SamplePropTypes
}
const SampleFunctionalComp = (props: samplePropTypes) => {
    const { propObj: { value, callFn, strValue } } = props
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            String Value:&nbsp;{strValue ? strValue : 'NA'}
            <br />
            {
                callFn()
            }
        </div>
    )
}

export default SampleFunctionalComp