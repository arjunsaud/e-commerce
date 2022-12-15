import React, { useContext } from "react";
import "../assets/styles/adminnav.css";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const AdminNav = () => {
  const { logout } = useContext(GlobalContext);

  // const toggleHamburger=()=>{

  // }

  return (
    <div className="sidenavbar">
      <div className="topbar">
        <div className="sidelogo h1 mx-2">e-Gadget</div>
        {/* <div className="profile h1 mx-2">
          <BiUserCircle color="white"/>
        </div> */}
      </div>
      <div className="sidemenu">
        <div className="sidemenulist">
          {/* <span className="sideham h1 mx-4" onClick={toggleHamburger}>
            <RxHamburgerMenu color="white"/>
          </span> */}
          <Link className="asidemenulink" to="/admin/dashboard">Dashboard</Link>
          <Link className="asidemenulink" to="/admin/products">Products</Link>
          <Link className="asidemenulink" to="/admin/addproduct">Add Products</Link>
          <Link className="asidemenulink" to="/admin/profile">Profile</Link>
          <Link className="asidemenulink" to="/admin/profile">Analytics</Link>
          <Link className="asidemenulink text-danger" onClick={()=>logout()}>Logout <FiLogOut/></Link>
        </div>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
