import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Jumbotron/jumbotron";
import Navbar from './components/Navbar/navbar';
import Content from './containers/Content/content';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Home />
      <Content/>
      <Navbar/>
    </div>
  </BrowserRouter>
);

export default App;
