import { useState, useEffect, useContext } from "react";
import { getUsers } from "./UserService";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/react'

import InteractionsContext from "../context/InteractionsContext";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useContext(InteractionsContext);

  const increaseCounter = () => {
    setCounter(previousCounter => previousCounter + 1);
  }

  useEffect (() => {
    async function fetchUsersData() {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsersData();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }
  
  return (
    <div className="p-10 pb-36">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users.map((user) => (
          <Card key={user.id} className="m-1 border rounded-lg shadow shadow-sky-800">
            <CardHeader>
              <p>{user.id}</p>
            </CardHeader>
            <CardBody>
              <p>User: <span className="font-semibold">{user.lastName}, {user.firstName}</span></p>
            </CardBody>
            <CardFooter className="bg-indigo-100">
            <Link onClick={increaseCounter} to={`/users/${user.id}`}>More info</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


export default UserList;