import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
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
    </div>
  );
};

export default Home;
