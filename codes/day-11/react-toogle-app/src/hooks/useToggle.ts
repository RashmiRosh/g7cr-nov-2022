import { ReactElement, useState } from "react"
import ToggleSwitch from "../components/toggle-switch/ToggleSwitch"

const useToggle = (labelValue: string): [boolean, ReactElement] => {
    const [viewState, setViewState] = useState<boolean>(false)
    const viewStateHandler = (status: boolean) => {
        setViewState(status)
    }
    const toggleDesign = ToggleSwitch({ label: labelValue, handler: viewStateHandler })
    // const toggleDesign = <ToggleSwitch label={labelValue} handler={viewStateHandler} />
    return [viewState, toggleDesign]
}
export default useToggle