import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./assets/Components/Footer";
import Home from "./assets/Screens/Home";
import { Navbar } from "./assets/Components/Navbar";
import Pricebar from "./assets/Components/Pricebar";
import Confirm from "./assets/Components/Confirm";
import Scanner from "./assets/Components/Scanner";
import Statement from "./assets/Components/Statement";
import Contact from "./assets/Components/Contact";

function App() {
  return (
    <div className=" bg-gray-100 flex relative flex-col  border-1  drop-shadow-md justify-start items-center   w-full lg:w-[30rem] mx-auto">
      <Router>
        <Navbar />
        <Pricebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qr" element={<Scanner />} />
          <Route path="/statement" element={<Statement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
