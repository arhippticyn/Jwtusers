import React from 'react';
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { LogIn } from '../redux/operation';


const Login = () => {
  const dispath = useDispatch()

  const LogInSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const username = form.elements.username.value
    const password = form.elements.password.value
    dispath(LogIn({username: username, password: password}))
    form.reset()
  }
  return (
    <div>
      <h2>Login</h2>
      <form action="" className={styles.form} onSubmit={LogInSubmit}>
        <label htmlFor="username">Enter username:</label>
        <input type="text" name="username" className={styles.input} id="" />
        <label htmlFor="password">Enter password:</label>
        <input type="password" name="password" className={styles.input} id="" />

        <button type="submit" className={styles.btn}>Log in</button>
      </form>
    </div>
  )
}

export default Login;