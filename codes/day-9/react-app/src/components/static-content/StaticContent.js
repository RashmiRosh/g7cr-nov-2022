import React from "react";

export function StaticContent(args) {
    //data
    // const content = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`

    //design
    const pElement = (
        <p
            id='contentpara'
            style={
                { backgroundColor: 'azure' }
            }>
            {args.contentToDisplay}
        </p>
    )

    return pElement
}