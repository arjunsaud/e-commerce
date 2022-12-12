import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={Router}></RouterProvider>
    </GlobalContextProvider>
  );
}

export default App;
