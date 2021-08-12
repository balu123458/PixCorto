import React from "react";

import { Route } from "react-router-dom";
import Home2 from "./components/Home2";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Subcription from "./components/Subcription";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Route exact path="/PixCorto" component={Home2} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/subscription" component={Subcription} />
      <Footer/>
    </div>
  );
};

export default App;
