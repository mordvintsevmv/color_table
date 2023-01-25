import {createSlice} from "@reduxjs/toolkit";

interface IColor {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}
interface ColorState {
    colors: IColor[],
    loading: boolean,
    error: null | string
}

const initialState: ColorState = {
    colors: [],
    loading: false,
    error: null
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
        }
    }
})

export default colorSlice.reducer