import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./camponents/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./camponents/link/Home";
import About from "./camponents/link/About";
import Services from "./camponents/link/Services";
import Gallery from "./camponents/link/Gallery";
import Carrier from "./camponents/link/Carrier";
import { AppContext } from "./Context";
// import Form from "./camponents/Form";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContext>
      <Navbar title="textUtils" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Services/:id" element={<Services />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Carrier" element={<Carrier />}></Route>
      </Routes>
    </AppContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
