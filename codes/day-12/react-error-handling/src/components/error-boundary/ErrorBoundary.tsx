import React, { Component, ErrorInfo, ReactElement } from 'react'

type ErrorBoundaryPropsType = {
    children: ReactElement | ReactElement[],
    errorLogger?: (error: Error, errInfo: ErrorInfo) => void
}
type ErrorBoundaryStateType = {
    errorMessage: string
}
export default class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
    constructor(props: ErrorBoundaryPropsType) {
        super(props)
        console.log('EB=>created');
    }
    state: Readonly<ErrorBoundaryStateType> = {
        errorMessage: ''
    }
    static getDerivedStateFromError(error: Error): ErrorBoundaryStateType | null {
        console.log('EB=>GDSFE')
        return {
            errorMessage: error.message
        }
    }
    render() {
        console.log('EB=>render')
        if (this.state.errorMessage === '')
            return this.props.children
        else
            return <span>error occurred</span>
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('EB=>CDC');
        // this.setState({
        //     errorMessage: error.message
        // })
        if (this.props.errorLogger)
            this.props.errorLogger(error, errorInfo)
    }
}
