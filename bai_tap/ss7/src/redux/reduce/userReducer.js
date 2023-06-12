import {GET_ALL_USER, DELETE_USER} from "../action/type";

const initialState = []
const userManagementReducer = (users = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload
        case DELETE_USER:
            const deleteUser = users.filter((element) => element.id !== payload)
            return deleteUser
        default:
            return users;
    }
}
export default userManagementReducer