import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminNav from "../layout/AdminNav";
import {GlobalContext} from "../../context/GlobalContext"
const AdminWrapper = () => {
  const { role } = useContext(GlobalContext);
  return (
    (role)?(<AdminNav/>):(<Navigate to="/login"/>)
  );
};
export default AdminWrapper;
