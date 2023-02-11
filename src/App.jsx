import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import ProtectedRoutes from "./Components/ProtectedRoutes";
import WelcomePage from "./Components/WelcomePage";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/welcomepage" element={<WelcomePage />}></Route>
          </Route>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
