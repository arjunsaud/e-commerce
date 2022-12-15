import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LayoutWrapper from "../components/wrapper/layoutWrapper";
import AdminWrapper from "../components/wrapper/adminWrapper";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";
import UserProfile from "../pages/profile/UserProfile";
import Search from "../pages/search/Search";
import Cart from "../pages/cart/Cart";

export const Router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminWrapper />,
    children: [
      {
        path:"/admin",
        element:<Navigate to="/admin/dashboard"/>
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/profile",
        element: <Profile />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/addproduct",
        element: <AddProduct />,
      }
    ],
  },
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
