import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import Recuperar from "./pages/Recuperar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route path="/Recuperar" component={Recuperar} />

    </BrowserRouter>
  );
}
