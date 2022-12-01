import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import { productsReducer } from "./productsSlice"

const loggerMiddleware = createLogger()

const store = configureStore({
    reducer: {
        product: productsReducer,
    },
    middleware: [loggerMiddleware]
})
export default store