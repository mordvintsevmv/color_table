import {Dispatch} from "redux";
import {themeSlice} from "../slice/themeSlice";

const {set} = themeSlice.actions
export const setTheme = (theme: string) => (dispatch: Dispatch) => {
    dispatch(set(theme))
    localStorage.setItem('theme', theme)
}