import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle'
// import ToggleSwitch from '../toggle-switch/ToggleSwitch'

const Editor = () => {
    const [textState, setTextState] = useState<string>('')

    // const [viewState, setViewState] = useState<boolean>(false)
    // const viewStateHandler = (status: boolean) => {
    //     setViewState(status)
    // }
    const [toggleState, ToggleElement] = useToggle('ViewFullText')
    return (
        <div>
            <label htmlFor="txtEdit">
                Enter Text:&nbsp;&nbsp;
            </label>
            <input type="text" id='txtEdit' value={textState} onChange={
                (e) => setTextState(e.target.value)
            } />
            &nbsp;&nbsp;
            {/* <ToggleSwitch label='ViewFull' handler={setToggleState} /> */}
            {
                ToggleElement
            }
            <br />
            {
                toggleState &&
                (
                    <div>
                        <label htmlFor="textArea">View Full Text:&nbsp;</label>
                        <textarea name="textArea" id="textArea" value={textState} />
                    </div>
                )
            }
        </div>
    )
}

export default Editor