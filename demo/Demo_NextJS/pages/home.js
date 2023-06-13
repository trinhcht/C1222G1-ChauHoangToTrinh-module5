import axios from "axios";

export default function UserList({users}){
    return (
       <table>
           <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
           </thead>
           <tbody>
           {
               users.map((user) => (
                   <tr key={user.id}>
                       <td>{user.id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.address.street}</td>
                   </tr>
               ))
           }
           </tbody>
       </table>
    )
}

export const getStaticProps = async () => {
    // fetch dữ liệu từ file system, API, DB,...
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    // Giá trị của `props` sẽ được truyền tới component `Home`
    return {
        props: {
            users: response.data
        }
    }
}
