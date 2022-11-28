import { ReactElement, useState } from "react"
//import Toggle from "../toggle/Toggle"

const useToggle = (labelName: string): [boolean, JSX.Element] => {
    const [viewState, setViewState] = useState<boolean>(false)

    const viewStateHandler = (status: boolean) => {
        setViewState(status)
    }

    const toggleComponent = () => (
        <div className="container">
            <label htmlFor={labelName}>{labelName}{" "}</label>
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={labelName} id={labelName} onChange={
                        (e) => {
                            viewStateHandler(e.target.checked)
                        }
                    } />
                <label className="label" htmlFor={labelName}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
    return [viewState, toggleComponent()]
}
export default useToggle