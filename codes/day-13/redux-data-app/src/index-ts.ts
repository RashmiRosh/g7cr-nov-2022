// const { configureStore, createSlice, } = require('@reduxjs/toolkit')
// const { createLogger } = require('redux-logger')
// const axios = require('axios')

import { configureStore, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import axios from "axios";

interface ProductsStateType {
    loading: boolean,
    errorMessage: string,
    products: [] | null
}

const initialProductsState: ProductsStateType = {
    loading: true,
    errorMessage: '',
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        initiate: (state, action: PayloadAction<undefined>) => {
            state.loading = true
            state.products = []
            state.errorMessage = ''
        },
        success: (state, action: PayloadAction<[]>) => {
            state.loading = false
            state.errorMessage = ''
            state.products = action.payload
        },
        failure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.errorMessage = action.payload
            state.products = null
        }
    }
})

const { initiate: initiateActionCreator, success: successActionCreator, failure: failureActionCreator } = productsSlice.actions

const productsReducer = productsSlice.reducer

const loggerMiddleware = createLogger()

const store = configureStore({
    reducer: {
        product: productsReducer
    },
    middleware: [loggerMiddleware]
})


const fetchData = (dispatchFnRef: Dispatch) => {
    const initiateAction = initiateActionCreator()
    dispatchFnRef(initiateAction)
    axios
        .get('http://localhost:4000/api/products')
        .then(
            (resp) => {
                const productRecords = resp.data.data
                const successAction = successActionCreator(productRecords)
                dispatchFnRef(successAction)
            },
            (err) => {
                const failureAction = failureActionCreator(err.message)
                dispatchFnRef(failureAction)
            }
        )
}
fetchData(store.dispatch)