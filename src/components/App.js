import React     from "react";
import { Route } from "react-router-dom";
import  Henlo    from "../redux/containers/birbContainer";
import About     from "../redux/containers/birbAboutContainer";

const App = () => (
  <div>
    <Route exact path="/" component={Henlo} />
    <Route exact path="/about" component={About} />
  </div>
);

export default App;
