import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./ls.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/admin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    history.push("/adminDash");
  };

  return (
    <div className="before">
      <div className="container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login">
            <h1>Login to your Account</h1>
          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <br />
          <br />
          <button type="submit" onClick={() => dispatch(login({ email }))}>
            Login
          </button>
          <br />
          <br />
          <p>
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
