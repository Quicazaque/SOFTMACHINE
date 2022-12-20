import "./assets/global.css";
import Login from "./views/Login";
import Machine from "./views/Machine";
import Nav from "./components/utils/Nav";
import Home from "./views/Home";
import { /**Link,*/ Route, Routes } from "react-router-dom";
import SignIn from "./views/SignIn";
import Machines from "./views/Machines";

export default function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element=<Login></Login>></Route>
        <Route path="/inventario" element={<Machines></Machines>}></Route>
        <Route
          path="/inventario/:maquina"
          element={<Machine></Machine>}
        ></Route>
        <Route path="/sign in" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<h1>404 NOT FROND</h1>}></Route>
      </Routes>
    </div>
  );
}
