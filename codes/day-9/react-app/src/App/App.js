import { StaticContent } from "../components/static-content/StaticContent";
import { Welcome } from "../components/welcome/Welcome";
import React from "react";

export function App() {
    const message = "Welcome to React JS"
    const content = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`
    const call = (value) => {
        console.log('called', value)
    }
    // const welcomeElement = Welcome({messageToShow:'Welcome to React JS', callFn:call})
    // const contentElement = StaticContent({contentToDisplay:''})

    // const rootElement = (
    //     <div>
    //         {welcomeElement}
    //         <hr />
    //         {contentElement}
    //     </div>
    // )
    const rootElement = (
        <div>
            <Welcome messageToShow={message} callFn={call} />
            <hr />
            <StaticContent contentToDisplay={content} />
        </div>
    )
    return rootElement
}