import userManagementService from "../../service/userManagementService";
import {GET_ALL_USER, DELETE_USER} from "./type";

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await userManagementService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteUsers = (id) => async (dispatch) => {
    try {
        await userManagementService.remove(id);
        alert('Deleted successful')
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    } catch (error) {
        console.log(error);
        alert('Deleted failed')
    }
}