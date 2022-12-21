import "./assets/global.css";
import Login from "./views/login/Login";
import Machine from "./views/machine/Machine";
import Machines from "./views/machine/Machines";
import SignIn from "./views/Signin/SignIn";
import Nav from "./components/utils/Nav";
import Home from "./views/home/Home";

import { /**Link,*/ Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inventario" element={<Machines/>}/>
        <Route path="/inventario/:maquina" element={<Machine/>}/>
        <Route path="/sign in" element={<SignIn/>}/>
        <Route path="*" element={<h1>404 NOT FROND</h1>}></Route>
      </Routes>
    </div>
  );
}
