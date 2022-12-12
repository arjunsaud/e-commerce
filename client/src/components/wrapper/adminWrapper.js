import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import AdminNav from "../layout/AdminNav";
const AdminWrapper = () => {
  const {loggedIn,userRole}=useContext(GlobalContext)
  return (
      <AdminNav/>
  );
};
export default AdminWrapper;
