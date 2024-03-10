import Navbar from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import { Outlet } from "react-router-dom";
const Layouts = (props) => {
  return (
    <>
      <Navbar>
        <Footer>
        </Footer>
      </Navbar>
          <Outlet />
    </>
  );
};

export default Layouts;
