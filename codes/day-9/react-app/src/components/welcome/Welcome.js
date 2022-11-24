import React from "react";
import './Welcome.css'
//import styles from './Welcome.css'

//args={messageToShow:'Welcome to React JS', callFn:call}
export function Welcome(args) {
    //data
    //const message = 'Welcome to React JS'

    //design
    // const headerElement = createElement(
    //     'h2',
    //     {
    //         id: 'mainHeader',
    //         style: {
    //             backgroundColor: 'burlywood'
    //         }
    //     },
    //     message)
    const headerStyle = {
        backgroundColor: 'burlywood'
    }
    const data = 100
    const headerElement = (
        <h2 id="mainHeader" style={headerStyle} className='headerStyle' onMouseOver={
            () => {
                args.callFn(data)
            }
        }>
            {args.messageToShow}
        </h2>
    )

    return headerElement
}