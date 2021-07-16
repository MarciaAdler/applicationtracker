import React from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { StoreProvider } from "../src/utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import SideNav from "./components/SideNav";
import Add from "./Pages/Add";
import Footer from "./components/Footer";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Resources from "./Pages/Resources";
import SideNavQuotes from "./components/SideNavQuotes";
import Edit from "./Pages/Edit";
import Applications from "./Pages/Applications";
import AddSearches from "./Pages/AddSearches";
import SearchApps from "./Pages/SearchApps";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <HeaderNav />
          <SideNav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/applications" component={Applications} />
            <Route path="/signup" component={Signup} />
            <Route path="/add" component={Add} />
            <Route path="/addsearch" component={AddSearches} />
            <Route path="/edit" component={Edit} />
            <Route path="/resources" component={Resources} />
            <Route path="/searchapps" component={SearchApps} />
          </Switch>
        </Router>
      </StoreProvider>

      <Footer />
    </div>
  );
}

export default App;
