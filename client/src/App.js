import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <GlobalContextProvider>
        <RouterProvider router={Router}></RouterProvider>
      </GlobalContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
