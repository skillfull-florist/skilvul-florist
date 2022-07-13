import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Register() {
  const [userData, setUserData] = useState({ email: "", username: "", password: "" });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("test");
    const data = JSON.stringify(userData);
    localStorage.setItem("user", data);
  };

  const [lihatPass, setLihatpass] = useState(false);
  const lihatPassword = () => {
    setLihatpass((lihatPass) => !lihatPass);
  };
  return (
    <div>
      <h1>Register Member</h1>
      <div style={{ marginBottom: "50px" }}></div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Anda</Form.Label>
          <Form.Control type="email" placeholder="Masukan Email Anda" name="email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nama Anda</Form.Label>
          <Form.Control type="text" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type={lihatPass ? "text" : "password"} placeholder="Masukan Password Anda" name="username" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="lihat password" onChange={lihatPassword} checked={lihatPass} />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
