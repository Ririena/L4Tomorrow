import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppWrapper } from "./provider/AppProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Navigation/Header.jsx";
import Footer from "./components/Navigation/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppWrapper>
  </React.StrictMode>
);
