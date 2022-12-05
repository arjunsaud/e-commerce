import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RouterProvider router={Router}></RouterProvider>
  );
}

export default App;
