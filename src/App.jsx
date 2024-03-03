import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
export default function App() {
  return (
    <>
      <main>
        <section>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
            </Routes>
          </Router>
        </section>
      </main>
    </>
  );
}
