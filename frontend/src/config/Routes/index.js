import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Create, Detail, Home, Register, Login } from "../../pages";

const Rotes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* page home */}
        <Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create/:id?">
            <Create />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Route>
      </Switch>
      <Switch>
        {/* page login */}
        <Route exact path="/login">
          <Login />
        </Route>

        {/* page register */}
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Rotes;
