import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { successToast } from "../services/toastify.service";
import { errorToast } from "../services/toastify.service";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    try {
      const response = await axios.post(`${SERVER_URL}/users/login`, userData);
      //console.log(response.data);

      if (response.data.status) {
        navigate("/home");
        successToast(response.data.message);
        sessionStorage.setItem('isLoggedIn', true);
      
      }
    } catch (error) {
      errorToast(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#6699CC",
      }}
    >
      <Card style={{ width: "550px", height: "450px", padding: "45px" }}>
        <h4 className="mb-4">SIGN IN</h4>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            className="mt-3 mb-4"
            style={{
              backgroundColor: "#ea4c89",
              width: "100%",
              fontSize: "16px",
              borderColor: "transparent",
            }}
          >
            Submit
          </Button>

          <a href="/">Don't have an Account? Sign Up</a>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;
