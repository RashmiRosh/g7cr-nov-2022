import React from 'react'
import './ToggleSwitch.css'

type ToggleSwitchPropsType = { label: string, handler: (status: boolean) => void }

const ToggleSwitch = ({ label, handler }: ToggleSwitchPropsType) => {
    return (
        <div className="container">
            <label htmlFor={label}>{label}{" "}</label>
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} onChange={
                        (e) => handler(e.target.checked)
                    } />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    )
}

export default ToggleSwitch