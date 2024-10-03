import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppContext } from "./Store/AppContext";
import UserDetails2 from "./Components/UserDetails2";
import NavBar from "./Components/NavBar";
import UserForm from "./Components/UserForm";
function App() {
  const context = useContext(AppContext);
  return (
    <>
      <NavBar></NavBar>
      <UserForm />
    </>
  );
}

export default App;
