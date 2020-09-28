import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import requestMovies from "./components/requestMovies";
import requestSeries from "./components/requestSeries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={requestMovies} />
        <Route exact path="/series" component={requestSeries} />
      </Router>
    </div>
  );
}

export default App;
