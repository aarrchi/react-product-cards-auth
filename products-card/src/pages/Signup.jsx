import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { successToast } from "../services/toastify.service";
import { errorToast } from "../services/toastify.service";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      fullName: fullName,
      email,
      password,
    };

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    try {
      const response = await axios.post(
        `${SERVER_URL}/users/register`,
        userData
      );
      if (response.data.status) {
        navigate("/signin");
        successToast(response.data.message);
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
      <Card style={{ width: "550px", height: "520px", padding: "45px" }}>
        <h4 className="mb-4">SIGN UP</h4>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4 mt-2">
            <Form.Label className="form-label">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full Name"
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
            className="mt-3 mb-3"
            style={{
              backgroundColor: "#ea4c89",
              width: "100%",
              fontSize: "16px",
              borderColor: "transparent",
            }}
          >
            Submit
          </Button>

          <a href="/signin">Already have an Account? Sign In</a>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
