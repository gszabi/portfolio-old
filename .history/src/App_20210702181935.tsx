import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
