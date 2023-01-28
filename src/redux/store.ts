import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice"
import colorReducer from "./slice/colorSlice"
import modalColorReducer from './slice/modalColorSlice'

export const store = configureStore({
    reducer:{
        themeReducer,
        colorReducer,
        modalColorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch