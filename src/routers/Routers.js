import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home";
import Main from "../Layouts/Main/Main";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default routers;
