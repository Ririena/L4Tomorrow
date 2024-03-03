import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppWrapper } from "./provider/AppProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Navigation/Header.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
    <Header/>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
