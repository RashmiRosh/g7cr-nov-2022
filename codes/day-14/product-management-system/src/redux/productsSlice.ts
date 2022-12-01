import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../models/product.model"
import { initialProductsState } from "./initialStates"

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        initiate: (state, action: PayloadAction<undefined>) => {
            state.loading = true
            state.products = []
            state.errorMessage = ''
        },
        success: (state, action: PayloadAction<Product[]>) => {
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

export const { initiate: initiateActionCreator, success: successActionCreator, failure: failureActionCreator } = productsSlice.actions

export const productsReducer = productsSlice.reducer