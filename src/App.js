import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";

import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/todo">todo</Link> <Link to="/counter">counter</Link>
          <Link to="/products">products</Link>
        </nav>
        {/* <Route exact path="/" component={Todo} /> */}
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/counter" component={Counter} />
          <Redirect exact from="/" to="/todo" />

          <Route path="/products" component={ProductsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
