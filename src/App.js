import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import TodoPage from "./pages/Todo";
import TypeWritter from "./pages/TypeWritter";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={TodoPage} />
        <Route path="/type-writter" component={TypeWritter} />
      </Switch>
    </div>
  );
}

export default App;
