import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layouts from "./components/Layout/Layouts";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const shouldShowLayout = () => {
    const path = window.location.pathname;
    return !(path.includes("/login") || path.includes("/register"));
  };

  return (
    <>
      {shouldShowLayout() && (
        <Layouts>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
        </Layouts>
      )}
      {!shouldShowLayout() && (
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
      )}
    </>
  );
}
