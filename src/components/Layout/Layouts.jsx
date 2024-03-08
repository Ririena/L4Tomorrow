import Navbar from "../Navigation/Header";
import Footer from "../Navigation/Footer";

const Layouts = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layouts