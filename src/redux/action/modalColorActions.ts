import {modalColorSlice} from "../slice/modalColorSlice";
import {Dispatch} from "redux";
import axios from "axios";

const {modalColorSuccess, modalColorError, modalColorLoading} = modalColorSlice.actions

export const fetchModalColor = (id: number) => async (dispatch: Dispatch) => {
    dispatch(modalColorLoading())
    await axios.get(`https://reqres.in/api/products?id=${id}`)
        .then(res => dispatch(modalColorSuccess(res.data.data)))
        .catch(error => {
            dispatch(modalColorError(error.message))
        })
}
