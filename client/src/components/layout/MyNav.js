import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import { BiUserCircle, BiSearch, BiCart } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../../context/GlobalContext";

const MyNav = () => {
  return (
    <header>
      <div className="navbar">
        <TopBar />
      </div>
      <MenuBar/>
    </header>
  );
};

const MenuBar = () => {
  const [showHamburger, setShowHamburger] = useState(true);
  return (
    <>
      <nav>
        <div className="menu">
          <div
            className="hamburger"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            {showHamburger ? <RxHamburgerMenu /> : <IoMdClose />}
          </div>
          <ul
            className={
              showHamburger ? "menuitems" : "menuitems mobilemenuitems"
            }
          >
            <li>
              <Link className="menuitemslink" to="/">
                All
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Mobiles
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Laptops
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Tablets
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Smartwatch
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Headphones
              </Link>
            </li>
            <li>
              <Link className="menuitemslink" to="/">
                Camera
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const TopBar = () => {
  const { isLoggedIn, loggedIn } = useContext(GlobalContext);
  return (
    <>
      <div className="logo mx-4">e-Gadget</div>
      <div className="search">
        <input type="text" name="search" placeholder="Search Products" />
        <button type="button" name="button">
          <BiSearch />
        </button>
      </div>
      <div className="sidemenu mx-4">
        {isLoggedIn ? (
          <div>
            <Link className="sidemenulink" href="#">
              <BiCart />
            </Link>
            <Link className="sidemenulink" href="#">
              <BiUserCircle />
            </Link>
            <Link className="sidemenulink" onClick={() => loggedIn()}>
              <FiLogOut color="red" />
            </Link>
          </div>
        ) : (
          <div className="mt-1">
            <Link className="sidemenulink" to="/login">
              Login
            </Link>
            <Link
              className="sidemenulink"
              style={{ backgroundColor: "red", borderRadius: "3px" }}
              to="/signup"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyNav;
