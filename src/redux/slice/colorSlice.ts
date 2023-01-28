import {createSlice} from "@reduxjs/toolkit";
import {IColor} from "../../types/IColor";


interface ColorState {
    colors: IColor[],
    loading: boolean,
    error: null | string,
    page: number,
    per_page: number,
    total_colors: number,
    total_pages: number
}

const initialState: ColorState = {
    colors: [],
    loading: false,
    error: null,
    page: 1,
    per_page: 5,
    total_colors: 0,
    total_pages: 1,

}

export const colorSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {
        colorsLoading: (state) => {
            state.loading = true
        },

        colorsSuccess: (state, action) => {
            state.colors = action.payload;
            state.loading = false;
            state.error = null
        },

        colorsError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        setPage: (state, action) => {
            state.page = action.payload
        },

        setPerPage: (state, action) => {
            state.per_page = action.payload
        },

        setTotalColors: (state, action) => {
            state.total_colors = action.payload
        },

        setTotalPages: (state, action) => {
            state.total_pages = action.payload
        }

    }
})

export default colorSlice.reducer