import React, { ReactElement } from "react";
import "./Toggle.css";

type TogglePropsType = {
    label: string,
    handler: (status: boolean) => void
}
const Toggle = (props: TogglePropsType) => {
    return (
        <div className="container">
            <label htmlFor={props.label}>{props.label}{" "}</label>
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={props.label} id={props.label} onChange={
                        (e) => {
                            props.handler(e.target.checked)
                        }
                    } />
                <label className="label" htmlFor={props.label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default Toggle;