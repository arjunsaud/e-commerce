import React from "react";
import {Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { object, string } from "yup";
import { setInstance } from "../../config/axios";
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { setAuthDetails } from "../../Slices/authSlice";

const initialValues = {
  email: "",
  password: ""
};
const Login = () => {
  const axios = setInstance();

  const dispatch = useDispatch()

  const navigate=useNavigate()

  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
        const {data} = await axios.post("auth/login", {...values});
        const user={
          email:data.data.user.email,
          bearer_token:data.data.token,
          refresh_token:data.data.refreshToken,
          role:data.data.user.role
        }
        const role=data.data.user.role
        dispatch(setAuthDetails(user))
        if(role==="ADMIN"){
          navigate("/admin")
        }else{
          navigate("/")
        }
        action.resetForm()
    },
  });

  return (
    <>
      <div className="text-center d-flex justify-content-center mt-4">
        <Form>
          <h1>Login</h1>
          <div className="input-group input-group-lg">
          <Form.Control
            type="email"
            className="mt-4"
            value={values.email}
            name="email"
            onBlur={handleBlur}
            placeholder="Email"
            onChange={handleChange}
          />
          </div>
          <span className="text-danger">{errors.email}</span>
          <div className="input-group input-group-lg">
          <Form.Control
            type="password"
            className="mt-2"
            value={values.password}
            name="password"
            placeholder="Password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          </div>
          <span className="text-danger">{errors.password}</span>
          <br />
          <Button type="submit" className="btn-lg mb-4" onClick={handleSubmit}>
            Login
          </Button>
          <br />
          <Link to="/signup">Don't Have Account Yet</Link>
        </Form>
      </div>
    </>
  );
};


const loginSchema = () =>
  object({
    email: string().required("Email is Required"),
    password: string().required("Password is Required").min(4).max(32),
  });

export default Login;
