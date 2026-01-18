import React from "react";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/operation";
const Register = () => {
  const dispath = useDispatch();

  const RegisterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const email = form.elements.email.value;

    dispath(
      RegisterUser({ username: username, password: password, email: email })
    );

    form.reset();
  };
  return (
    <div>
      <h2>Register</h2>
      <form action="" className={styles.form} onSubmit={RegisterSubmit}>
        <label htmlFor="username">Enter username:</label>
        <input type="text" name="username" className={styles.input} />
        <label htmlFor="password">Enter password:</label>
        <input type="password" className={styles.input} name="password" id="" />
        <label htmlFor="email">Enter email:</label>
        <input type="email" name="email" className={styles.input} id="" />

        <button className={styles.btn}>Register</button>
      </form>
    </div>
  );
};

export default Register;
