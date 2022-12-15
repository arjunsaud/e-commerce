import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { setInstance } from "../../config/axios";
import {Form, Button } from "react-bootstrap";

const initialValues = {
  productName: "",
  productPrice: "",
};

const AddProduct = () => {
  const axios = setInstance();
  const [file,setFile]=useState()

  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      // const formData = new FormData();
      // formData.append('file',file)
      // formData.append('data',{...values})
      // console.log(formData);
      const data = await axios.post("products/addproduct", {...values});
      action.resetForm()
    },
  });
  return (
    <div className="mx-4">
      <div className="text-center d-flex justify-content-center mt-4">
        <Form>
          <h1>Add Product</h1>
          <div className="input-group input-group-lg">
            <Form.Control
              type="text"
              className="mt-4"
              value={values.productName}
              name="productName"
              onBlur={handleBlur}
              placeholder="Product Name"
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{errors.priceName}</span>
          <div className="input-group input-group-lg">
            <Form.Control
              type="text"
              className="mt-2"
              value={values.productPrice}
              name="productPrice"
              placeholder="Product Price"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{errors.productPrice}</span>
          {/* <div className="input-group input-group-lg">
            <Form.Control
              type="file"
              className="mt-2"
              name="image"
              onChange={(e)=>setFile(e.target.files[0])}
              required
            />
          </div> */}
          <br />
          <Button type="submit" className="btn-lg mb-4" onClick={handleSubmit}>
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
};

const loginSchema = () =>
  object({
    productName: string().required("Name is Required"),
    productPrice: string().required("Price is Required")
  });

export default AddProduct;
