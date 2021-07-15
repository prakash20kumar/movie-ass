import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </main>
    </Provider>
  );
}

export default App;
