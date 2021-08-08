import React from "react";

import { Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import { TestData } from "./components/TestData";
import Subcription from "./components/Subcription";

const App = () => {
  return (
    <div>
      <Navbar />

      <Route exact path="/PixCorto">
        <Home tests={TestData} />
      </Route>
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/subscription"component={Subcription}/>
    </div>
  );
};

export default App;
