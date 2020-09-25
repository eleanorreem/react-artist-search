import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchArtists from "./views/SearchArtists";
import Artist from "./views/Artist";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/artist/:id">
            <Artist />
          </Route>
          <Route path="/">
            <SearchArtists />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
