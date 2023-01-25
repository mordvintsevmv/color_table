import {colorSlice} from "../slice/colorSlice";
import {Dispatch} from "redux";
import axios from "axios";

const {colorsError, colorsSuccess, colorsLoading} = colorSlice.actions

export const fetchColors = (page: number, per_page:number = 5) => async (dispatch: Dispatch) => {
    try{
        dispatch(colorsLoading(true))
        await axios.get(`https://reqres.in/api/products?per_page=${per_page}&page=${page}`)
            .then(res => dispatch(colorsSuccess(res.data.data)))
    }
    catch (e){
        dispatch(colorsError(e))
    }
}