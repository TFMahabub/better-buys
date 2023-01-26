import { createBrowserRouter } from "react-router-dom";
import AddUsers from "../Components/pages/Admin/addUsers/AddUsers";
import AllUsers from "../Components/pages/Admin/allUsers/AllUsers";
import UpdateUser from "../Components/pages/Admin/allUsers/updateUser/UpdateUser";
import Home from "../Components/pages/Home/Home";
import Login from "../Components/pages/LogIn/Login";
import MytCart from "../Components/pages/MyCart/MytCart";
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
        path: "/my_cart",
        element: <MytCart />,
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
      {
        path: "/admin/add_users",
        element: <AddUsers />,
      },
      {
        path: "/admin/edit/:id",
        element: <UpdateUser />,
      },
    ],
  },
]);
export default routers;
