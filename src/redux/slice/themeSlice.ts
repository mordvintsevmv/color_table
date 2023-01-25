import {createSlice} from "@reduxjs/toolkit";

const getTheme = (): string => {
    const theme = `${window?.localStorage?.getItem('theme')}`
    if ([ 'light', 'dark' ].includes(theme)) return theme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return 'light'

    return 'dark'
}

const initialState: string = getTheme()
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        set: (state, action) => action.payload
    }
})

export default themeSlice.reducer