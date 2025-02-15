/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@heroui/react";
import { getUser } from "./UserService";

function UserCard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = parseInt(id, 10);
    console.log("ID", id);
    console.log("userId", userId);

    async function fetchUser() {
      try {
        const fetchedUser = await getUser(userId);
        setUser(fetchedUser);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  function formatNumber(userNumber) {
    return String(userNumber).padStart(4, "0");
  }

  return (
    <div className="w-full h-dvh p-24">
    <Card className="max-w-[450px] border-2 rounded-xl mx-auto shadow-xl shadow-indigo-600/70">
      <CardHeader className="flex gap-3 bg-indigo-700 text-white">
        <div className="flex flex-col">
          <p className="font-light pb-2">User ID: #{formatNumber(user.id)} </p>
          <p className="text-xs uppercase">Last name, first name</p>
          <p className="text-lg font-extrabold">
            {user.lastName}, {user.firstName}
          </p>
          <p className="text-xs">Date of birth: {user.birthDate}</p>
        </div>
      </CardHeader>
      <Divider orientation="vertical" />
      <CardBody className="bg-white text-indigo-950">
          <p className="font-bold">{user.company.name}</p>
          <p>{user.company.department}</p>
          <p className="text-sm italic pb-1">
            {user.company.title}
          </p>
        <p>Phone: {user.phone}</p>
        <p className="text-sm">Email: {user.email}</p>
      </CardBody>
      <CardFooter className="bg-indigo-700 text-white">
        <p>Alumni of <span className="font-bold">{user.university}</span></p>
      </CardFooter>
    </Card>
    </div>
  );
}
export default UserCard;
