import { createStore } from "redux";

type stateType = {
    count: number
}
const initialState: stateType = {
    count: 0
}
const actionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}
type actionType = {
    type: string,
    value?: any
}
type actionCreatorType = (data?: any) => actionType
const incrementActionCreator: actionCreatorType = (data?: any) => {
    const incrementAction = {
        type: actionTypes.INCREASE,
        value: data
    }
    return incrementAction
}
const decrementActionCreator: actionCreatorType = (data?: any) => {
    const decrementAction = {
        type: actionTypes.DECREASE,
        value: data
    }
    return decrementAction
}
const counterReducer: (state: stateType, action: actionType) => stateType = (state = initialState, action) => {
    let newState: stateType;
    switch (action.type) {
        case actionTypes.INCREASE:
            newState = {
                ...state,
                count: state.count + action.value
            }
            break;

        case actionTypes.DECREASE:
            newState = {
                ...state,
                count: state.count - action.value
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}

const store = createStore(counterReducer)
console.log(store.getState())
store.dispatch(incrementActionCreator(3))
console.log(store.getState())
store.dispatch(decrementActionCreator(2))
console.log(store.getState())
store.dispatch(decrementActionCreator(1))
console.log(store.getState())
store.dispatch(incrementActionCreator(10))
console.log(store.getState())

/*
const createStorage = (reducer) => {
    let currentState = initialState
    const dispatchRequest = (action) => {
        currentState = reducer({ ...currentState }, action)
    }
    return {
       dispatch:dispatchRequest,
       getState:()=>currentState
    }
}

const dispatchFnRef = createStorage(counterReducer)

console.log(dispatchFnRef(incrementActionCreator(3)))
console.log(dispatchFnRef(decrementActionCreator(2)))
console.log(dispatchFnRef(decrementActionCreator(1)))
console.log(dispatchFnRef(incrementActionCreator(10)))


counterReducer({ ...currentState }, incrementActionCreator(3))
console.log(currentState);

currentState = counterReducer({ ...currentState }, decrementActionCreator(2))
console.log(currentState);

currentState = counterReducer({ ...currentState }, decrementActionCreator(1))
console.log(currentState);

currentState = counterReducer({ ...currentState }, incrementActionCreator(10))
console.log(currentState);
    //createStore()
    */