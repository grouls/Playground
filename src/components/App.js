import React     from "react";
import { Route } from "react-router-dom";
import  Henlo    from "../redux/containers/birbContainer";
import About     from "../redux/containers/birbAboutContainer";
import Tasks     from "./Tasks";
import Header    from "./Header";
import Footer    from "./Footer";

const App = () => (
  <div>
  <Header />
    <Route exact path="/" component={Henlo} />
    <Route exact path="/home" component={Henlo} />
    <Route exact path="/about" component={About} />
    <Route exact path="/tasks" component={Tasks} />
    <Footer />
  </div>
);

export default App;
