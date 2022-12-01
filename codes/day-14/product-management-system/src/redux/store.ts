import { configureStore, Store } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import { productsReducer } from "./productsSlice"

const loggerMiddleware = createLogger()

const store = configureStore({
    reducer: {
        product: productsReducer,
    },
    middleware: [loggerMiddleware]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store