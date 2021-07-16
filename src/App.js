import React from "react";
import "./App.css";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Roommie_Profile from "./pages/Roommie_Profile";
import Error from "./pages/Error";
import Register from './pages/Register'
import RoommieRequest from './pages/RoommieRequest'

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lodges/:slug" component={SingleRoom} />
        <Route exact path="/roommates/:slug" component={Roommie_Profile} />
        <Route exact path="/upload_lodge" component={Register} />
        <Route exact path="/request_roommate" component={RoommieRequest} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
