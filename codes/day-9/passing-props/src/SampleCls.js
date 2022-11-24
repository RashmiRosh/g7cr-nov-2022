import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SampleCls extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired
    }
    render() {
        return (
            <div>SampleCls</div>
        )
    }
}
