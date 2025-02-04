import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function fetchUsers() {
            await fetch('https://dummyjson.com/users')
            .then(async (data) => {
                const response = await data.json();
                setUsers(response);
                
            });
            
        }

        fetchUsers();
    }, []);

    return(
        <div>
            <h1>Users</h1>
            <div>
                {users.map((user, index) => (
                    <User user={user} key={index} />
                ))}
            </div>
        </div>
    )
}

function User ({ user }) {
    return (
        <div>
            <h3>{user.username}</h3>
        </div>
    );
}

export default Users;