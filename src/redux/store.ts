import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice"
import colorReducer from "./slice/colorSlice"

export const store = configureStore({
    reducer:{
        themeReducer,
        colorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch