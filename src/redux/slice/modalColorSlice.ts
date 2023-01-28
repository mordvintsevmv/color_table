import {createSlice} from "@reduxjs/toolkit";
import {IColor} from "../../types/IColor";

interface modalColorState {
    color: IColor | null,
    loading: boolean,
    error: string | null
}

const initialState: modalColorState = {
    color: null,
    loading: false,
    error: null
}
export const modalColorSlice = createSlice({
    name: 'modalColor',
    initialState,
    reducers: {
        modalColorLoading: (state) => {
            state.loading = true
        },

        modalColorError: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        modalColorSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.color = action.payload
        }

    }

})

export default modalColorSlice.reducer