import {colorSlice} from "../slice/colorSlice";
import {Dispatch} from "redux";
import axios from "axios";

const {colorsError, colorsSuccess, colorsLoading, setPage, setTotalColors, setTotalPages} = colorSlice.actions

export const fetchColors = (page: number, per_page:number = 5) => async (dispatch: Dispatch) => {
    try{
        dispatch(colorsLoading())
        await axios.get(`https://reqres.in/api/products?per_page=${per_page}&page=${page}`)
            .then(res => {
                dispatch(colorsSuccess(res.data.data))
                dispatch(setTotalColors(res.data.total))
                dispatch(setTotalPages(res.data.total_pages))
            })
    }
    catch (e){
        dispatch(colorsError(e))
    }
}

export const setCurrentPage = (page: number) => (dispatch: Dispatch) => {
    dispatch(setPage(page))
}

export const findColorById = (id: number) => async (dispatch: Dispatch) => {
    try{
        await axios.get(`https://reqres.in/api/products?id=${id}`)
            .then(res => {
                console.log(res.data.data)
                dispatch(colorsSuccess([res.data.data]))
                dispatch(setTotalColors(1))
                dispatch(setTotalPages(1))

            })
    }
    catch (e){
        dispatch(colorsError(e))
    }
}