export default function Table({users}){
    return (
        <table>
            <tr>
                <th>name</th>
                <th>age</th>
            </tr>

            <tbody>
               {
                users.map(user =>(
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>    
                    </tr>
                ))

               }
            </tbody>
        </table>
    )
}