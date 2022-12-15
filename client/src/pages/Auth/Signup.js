import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { setInstance } from "../../config/axios"

const initialValues = {
  email: "",
  password: "",
};

const Signup = () => {
  const axios = setInstance();

  const navigate=useNavigate()
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      const response = await axios.post("auth/login", {...values});
      console.log(response);
      if(response){
        navigate("/login")
      }
      action.resetForm();
    },
  });

  return (
    <>
      <div className="text-center d-flex justify-content-center">
        <Form>
          <h1>Sign Up </h1>
          <div class="input-group input-group-lg">
            <Form.Control
              type="email"
              className="mt-4 input-group-lg"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div class="input-group input-group-lg">
            <Form.Control
              type="password"
              className="mt-2 input-group-lg"
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
            Sign up
          </Button>
          <br />
          <Link to="/login">Already Have Account !</Link>
        </Form>
      </div>
    </>
  );
};

const signupSchema = () =>
  object({
    email: string().required("Email is Required"),
    password: string().required("Password is Required").min(6).max(32),
  });

export default Signup;
