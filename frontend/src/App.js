import "./assets/global.css";
import Login from "./views/login/Login";
import GetMachine from "./views/machine/GetMachine";
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
        <Route path="/inventario/:maquina" element={<GetMachine/>}/>
        <Route path="/inventario/list" element={<Machines/>}/>
        <Route path="/sign in" element={<SignIn/>}/>
        <Route path="*" element={<h1>404 NOT FROND</h1>}></Route>
      </Routes>
    </div>
  );
}
