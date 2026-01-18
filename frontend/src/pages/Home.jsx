import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import User from "../components/User";
import { selectIsLogged } from "../redux/selectors";
import { setToken } from "../redux/AuthSlice";
import { setAuthHeader } from "../redux/operation";



const Home = () => {
  const logged = useSelector(selectIsLogged);
  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      dispatch(setToken(token))
      setAuthHeader(token)

      window.history.replaceState({}, '', '/')
    }
  }, [])

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>
      </nav>
      {logged ? (
        <User />
      ) : (
        <h2>Hello, please register</h2>
      )}
    </div>
  );
};

export default Home;
