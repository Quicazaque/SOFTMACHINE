import "./assets/global.css";
import Login from "./views/login/Login";
import GetMachine from "./views/machine/GetMachine";
import Machines from "./views/machine/Machines";
import SignIn from "./views/Signin/SignIn";
import Nav from "./components/utils/Nav";
import Home from "./views/home/Home";
import { CookiesProvider } from "react-cookie";
import { /**Link,*/ Route, Routes } from "react-router-dom";
import UserContext, { UserProvider } from "./contexts/UserContext";
import { TokenProvider } from "./contexts/TokenContext";

export default function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <CookiesProvider>
              <TokenProvider>
                <UserProvider>
                  <Login />
                </UserProvider>
              </TokenProvider>
            </CookiesProvider>
          }
        />
        <Route
          path="/inventario/:maquina"
          element={
            <CookiesProvider>
              <TokenProvider>
                <UserProvider>
                  <GetMachine />
                </UserProvider>
              </TokenProvider>
            </CookiesProvider>
          }
        />
        <Route
          path="/inventario/list"
          element={
            <CookiesProvider>
              <TokenProvider>
                <UserProvider>
                  <Machines />
                </UserProvider>
              </TokenProvider>
            </CookiesProvider>
          }
        />
        <Route
          path="/signin"
          element={
            <CookiesProvider>
              <TokenProvider>
                <UserProvider>
                  <SignIn />
                </UserProvider>
              </TokenProvider>
            </CookiesProvider>
          }
        />
        <Route path="*" element={<h1>404 NOT FROND</h1>}></Route>
      </Routes>
    </div>
  );
}
