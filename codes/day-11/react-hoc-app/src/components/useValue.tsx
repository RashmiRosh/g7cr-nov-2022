import { useReducer, useState } from "react"

type stateUpdateCallbackType<T> = () => T;

function useValue<T>(initialStateData: T): [T, (callback: stateUpdateCallbackType<T>) => void] {


    const [valueState, setValueState] = useState<T>(initialStateData)

    const valueHandler = (stateUpdateCallback: stateUpdateCallbackType<T>): void => {
        const newStateData: T = stateUpdateCallback()
        setValueState(newStateData)
    }
    return [valueState, valueHandler]
}
export default useValue