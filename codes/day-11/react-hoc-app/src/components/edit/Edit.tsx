import React, { useState } from 'react'
import Toggle from '../toggle/Toggle'

const Edit = () => {
    const [viewState, setViewState] = useState<boolean>(false)
    const [textState, setTextState] = useState<string>('')

    const viewStateHandler = (status: boolean) => {
        setViewState(status)
    }
    const textStateHandler = (text: string) => {
        setTextState(text)
    }
    return (
        <div>
            <label htmlFor="edit"> Enter:&nbsp;</label>
            <input type="text" name='edit' id='edit' value={textState} onChange={(e) => textStateHandler(e.target.value)} />
            &nbsp;&nbsp;
            <Toggle label='ViewEditedText' handler={viewStateHandler} />
            <br />
            <br />
            {
                viewState && (
                    <>
                        <label htmlFor="completeText">View Completed Text:&nbsp;&nbsp;</label>
                        <textarea id='completeText' value={textState} />
                    </>
                )
            }
        </div>
    )
}

export default Edit