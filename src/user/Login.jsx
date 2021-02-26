import React from "react";
import { setUser, logout, selectUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const loginToApp = () => {
    dispatch(setUser({ user: "Mark Lin" }));
  };
  console.log(user);
  return (
    <div>
      <h2>i am the login component</h2>
      {user ? <h2>The user is {user}</h2> : <h2>Nobody is signed in</h2>}
      <button onClick={loginToApp}>Log Me In</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
};

export default Login;
