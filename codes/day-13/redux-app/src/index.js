const { createStore, combineReducers } = require('redux')

const initialCountState = {
    count: 0
}
const initialNameState = {
    name: ''
}
const actionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    UPDATE_NAME: 'UPDATE_NAME'
}
const incrementActionCreator = (data) => {
    const incrementAction = {
        type: actionTypes.INCREASE,
        value: data
    }
    return incrementAction
}
const decrementActionCreator = (data) => {
    const decrementAction = {
        type: actionTypes.DECREASE,
        value: data
    }
    return decrementAction
}
const nameUpdateActionCreator = (data) => {
    return {
        type: actionTypes.UPDATE_NAME,
        value: data
    }
}
const counterReducer = (state = initialCountState, action) => {
    let newState;
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

const nameReducer = (state = initialNameState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.UPDATE_NAME:
            newState = {
                ...state,
                name: action.value
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

const rootReducer = combineReducers({
    count: counterReducer,
    newName: nameReducer
})
const store = createStore(rootReducer)

console.log(store.getState())
store.dispatch(incrementActionCreator(3))
console.log(store.getState())
store.dispatch(decrementActionCreator(2))
console.log(store.getState())
store.dispatch(decrementActionCreator(1))
console.log(store.getState())
store.dispatch(incrementActionCreator(10))
console.log(store.getState())

store.dispatch(nameUpdateActionCreator('joydip'))
console.log(store.getState());

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