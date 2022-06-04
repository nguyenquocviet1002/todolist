import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { GoogleAuthProvider } from "./common/Auth";
import PrivateRouter from "./common/RouterPrivate";
import PublicRouter from "./common/RouterPublic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleAuthProvider>
    <BrowserRouter>
      <Header />
      <PrivateRouter path="/todo" element={<App />} />
      <PublicRouter path="/" element={<Home />} />
    </BrowserRouter>
  </GoogleAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
