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
import NotFound from "./pages/NotFound";

const withLayout = (LayoutComponent, ChildComponent) => {
  return (props) => (
    <LayoutComponent>
      <ChildComponent {...props}></ChildComponent>
    </LayoutComponent>
  );
};

const HomeWithLayout = withLayout(Layouts, Home);
const MeWithLayout = withLayout(LayoutsUser, Me);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeWithLayout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="me" element={<MeWithLayout />}>
        <Route index element={<Me />} />
        <Route path="mail" element={<Mail />} />
        <Route path="message">
          <Route path=":urlId" element={<Url />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
