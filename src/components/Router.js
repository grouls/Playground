import React             from "react";
import { BrowserRouter } from "react-router-dom";
import App               from "./App";

const Routes = () => (
  //   <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //   </Provider>
);

export default Routes;
