import React             from "react";
import { BrowserRouter } from "react-router-dom";
import App               from "./App";
import { Provider }      from 'react-redux';
import store             from "../redux/store";

const Routes = () => (
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);

export default Routes;
