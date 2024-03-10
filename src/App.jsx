import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/Layout/Layouts";
import LayoutsUser from "./components/Layout/LayoutsUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import Mail from "./pages/Mail";
import Url from "./pages/Url";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound"
export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/me" element={<Me />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/message/:urlId" element={<Url />} />
      <Route exact path="/me/mail" element={<Mail />} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
  );
}
