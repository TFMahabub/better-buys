import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Components/pages/Admin/allUsers/AllUsers";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/pages/LogIn/Login";
import Register from "../Components/pages/register/Register";
import AdminLayout from "../Layouts/Main/Admin/AdminLayout";
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AllUsers />,
      },
    ],
  },
]);
export default routers;
