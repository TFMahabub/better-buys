import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/Routers";
import AllData from "./Context/data/AllData";
import UserAuthentication from "./Context/authentication/UserAuthentication";

function App() {
  return (
    <AllData>
      <UserAuthentication>
        <RouterProvider router={routers} />
      </UserAuthentication>
    </AllData>
  );
}

export default App;
