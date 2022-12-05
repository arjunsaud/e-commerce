import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import LayoutWrapper from "../components/wrapper/layoutWrapper";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutWrapper/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
            
              {
                path: "/About",
                element: <About/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
        ]
    }
]);
