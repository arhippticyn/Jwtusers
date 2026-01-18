import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogged, selectToken, selectUser } from "../redux/selectors";
import { GetUser } from "../redux/operation";
import { LogOut } from "../redux/AuthSlice";

const User = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUser());
  }, [dispatch, token]);

  if (!user.username) return <p>Loading...</p>
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <button onClick={() => dispatch(LogOut())}>Log Out</button>
    </div>
  );
};

export default User;
