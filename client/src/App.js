import React from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { StoreProvider } from "../src/utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <HeaderNav />
          <SideNav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
