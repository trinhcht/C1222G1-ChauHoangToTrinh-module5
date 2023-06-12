import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers, getAllUsers} from "../redux/action/user";

export function UserManagement() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <>
            <h2>User list</h2>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample">Get users
            </button>
            <div className="collapse" id="collapseExample">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => dispatch(deleteUsers(user.id))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                    }
                    </tbody>
                </table>
            </div>
        </>


    )


}