import React from 'react'

type NamePropsType = {
    nameData: string,
    nameDataHandler: (args: string) => void
}
const Name = (props: NamePropsType) => {
    console.log('Name renderded')
    return (
        <div>
            Name:&nbsp;
            <input type="text" value={props.nameData} onChange={(e) => props.nameDataHandler(e.target.value)} />
        </div>
    )
}

export default Name