import React     from "react";
import { Route } from "react-router-dom";
import Henlo     from "../redux/containers/birbHenloContainer";
import About     from "../redux/containers/birbAboutContainer";
import Tasks     from "./tasks";
import Header    from "./nav/Header";
import Footer    from "./nav/Footer";
import Resources from "./resources";
import "../assets/styles/app.scss";

const App = () => (
  <div className="appWrapper">
    <Header />
    <div className="wrapper">
      <Route exact path="/" component={Henlo} />
      <Route exact path="/home" component={Henlo} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/resources" component={Resources} /> 
      <Footer />
    </div>
  </div>
);

export default App;
