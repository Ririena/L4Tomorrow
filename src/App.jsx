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
import NotFounds from "./pages/NotFounds";
import MailId from "./pages/MailId";
import RetrieveUserFirst from "./components/Main/RetrieveUserFirst";
import Rank from "./pages/Rank";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import LayoutsAdmin from "./components/Layout/LayoutsAdmin";
const withLayout = (LayoutComponent, ChildComponent) => {
  return (props) => (
    <LayoutComponent>
      <ChildComponent {...props}></ChildComponent>
    </LayoutComponent>
  );
};

const AdminWithLayout = withLayout(LayoutsAdmin, Dashboard);
const HomeWithLayout = withLayout(Layouts, Home);
const MeWithLayout = withLayout(LayoutsUser, Me);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MeWithLayout />}>
      <Route index element={<Home />} />
        <Route path="edit" element={<Edit />} />
        <Route path="test" element={<Test />} />
      <Route path="rank" element={<Rank />} />
      </Route>
      <Route path="admin" element={<LayoutsAdmin />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="login" element={<Login />} />

      <Route path="verified" element={<RetrieveUserFirst />} />
      <Route path="register" element={<Register />} />
      <Route path="message" element={<MeWithLayout />}>
        <Route path=":urlId" element={<Url />} />
      </Route>
      <Route path="me" element={<MeWithLayout />}>
        <Route index element={<Me />} />
        <Route path="mail">
          <Route index element={<Mail />} />
          <Route path=":mailId" element={<MailId />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFounds />} />
    </Routes>
  );
}
