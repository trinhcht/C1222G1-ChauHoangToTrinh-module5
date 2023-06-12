import request from '../http-common'
const findAll=()=>{
    return request.get('/users')
}
const remove=(id)=>{
    return request.delete(`/users/${id}`)
}
const userManagementService={
    findAll,
    remove
}
export default userManagementService;