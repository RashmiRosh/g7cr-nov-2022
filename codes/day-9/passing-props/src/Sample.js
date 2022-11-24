import React from 'react'
import PropTypes from "prop-types";

const Sample = (args) => {
    console.log(args)
    const { value, callFn, strValue } = args
    return (
        <span>
            Value:&nbsp;
            {
                value ? value : 'NA'
            }
        </span>
    )
}
Sample.propTypes = {
    value: PropTypes.number.isRequired,
    strValue: PropTypes.string,
    callFn: PropTypes.func.isRequired
}
export default Sample