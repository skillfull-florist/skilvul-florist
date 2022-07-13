import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function Register() {
  const [userData, setUserData] = useState({ email: "", username: "", password: "" });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(validasi(userData));
    setIsSubmit(true);
    // const data = JSON.stringify(userData);
    // localStorage.setItem("user", data);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(userData);
    }
  }, [formError]);

  const validasi = (nilai) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!nilai.email) {
      errors.email = "Email Tidak Boleh Kosong";
    } else if (!regex.test(userData.email)) {
      errors.email = "Format email salah !!!";
    }
    if (!nilai.username) {
      errors.username = "Nama Anda Tidak Boleh Kosong";
    }
    if (!nilai.password) {
      errors.password = "Password Anda Tidak Boleh Kosong";
    } else if (nilai.password.length < 8) {
      errors.password = "Password lebih dari 8 Karakter ";
    }
    return errors;
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
          <Form.Label>
            <h4>Email Anda</h4>
          </Form.Label>
          <Form.Control type="email" placeholder="Masukan Email Anda" name="email" onChange={handleChange} />
        </Form.Group>
        <p>{formError.email}</p>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <h4>Nama Anda</h4>
          </Form.Label>
          <Form.Control type="text" placeholder="Masukan Nama Anda" name="username" onChange={handleChange} />
        </Form.Group>
        <p>{formError.username}</p>

        <Form.Group className="mb-3">
          <Form.Label>
            <h4>Password Anda</h4>
          </Form.Label>
          <Form.Control type={lihatPass ? "text" : "password"} placeholder="Masukan Password Anda" name="password" onChange={handleChange} />
        </Form.Group>
        <p>{formError.password}</p>

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
