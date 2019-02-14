import React     from "react";
import { Route } from "react-router-dom";
import  Henlo    from "../redux/containers/birbContainer";
import About     from "../redux/containers/birbAboutContainer";
import Tasks     from "./Tasks";

const App = () => (
  <div>
    <Route exact path="/" component={Henlo} />
    <Route exact path="/home" component={Henlo} />
    <Route exact path="/about" component={About} />
    <Route exact path="/tasks" component={Tasks} />
  </div>
);

export default App;
