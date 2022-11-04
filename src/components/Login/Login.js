import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Form,
  Content,
  TellMe,
  Label,
  Input,
  TellMeButton,
} from "./Login.styled";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUser = async () => {
    if (username && password) {
      const user = { username, password };
      const response = await axios.post("/login", user);
      return response.data;
    } else {
      alert("Missed a field");
    }
  };

  const login = (event) => {
    event.preventDefault();
    checkUser().then((response) => {
      if (response.length === 0) {
        alert("No one goes by that language round here");
        setUsername("");
        setPassword("");
      } else {
        navigate(`/home/${response[0].employee_no}`);
      }
    });
  }; // end login

  return (
    <Form onSubmit={login}>
      <h3>Login</h3>
      <Content>
        <TellMe>
          <Label htmlFor="username">
            Username:
            <Input
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
        </TellMe>
        <TellMeButton
          m={3}
          onClick={login}
          sx={{ width: 120 }}
          variant="contained"
        >
          Login
        </TellMeButton>
      </Content>
    </Form>
  );
}

export default LoginForm;
