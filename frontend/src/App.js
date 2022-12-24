import "./assets/global.css";
import Login from "./views/login/Login";
import GetMachine from "./views/machine/GetMachine";
import Machines from "./views/machine/Machines";
import SignIn from "./views/Signin/SignIn";
import Nav from "./components/utils/Nav";
import Home from "./views/home/Home";

import { /**Link,*/ Route, Routes } from "react-router-dom";
import UserContext, { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        
        <Route
          path="/login"
          element={
            <UserProvider>
              <Login />
            </UserProvider>
          }
        />
        <Route
          path="/inventario/:maquina"
          element={
            <UserProvider>
              <GetMachine />
            </UserProvider>
          }
        />
        <Route
          path="/inventario/list"
          element={
            <UserProvider>
              <Machines />
            </UserProvider>
          }
        />
        <Route
          path="/signin"
          element={
            <UserProvider>
              <SignIn />
            </UserProvider>
          }
        />
        <Route path="*" element={<h1>404 NOT FROND</h1>}></Route>
      </Routes>
    </div>
  );
}
