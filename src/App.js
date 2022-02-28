import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar />
      {isLoggedIn ? <Home /> : <Login />}
    </>
  );
}

export default App;
