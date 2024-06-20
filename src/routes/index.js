import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CadastroEspecie from "../pages/CadastroEspecie";
import ListaAnimais from "../pages/ListaAnimais";
import CadastroAnimais from "../pages/CadastroAnimais";
import Signin from "../pages/Signin";
import Cadastro from "../pages/Cadastro";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* <Route exact path="/home" element={<Private Item={Home} />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/CadastroEspecie" element={<CadastroEspecie />} />
          <Route path="/CadastroAnimais" element={<CadastroAnimais />} />
          <Route path="/ListaAnimais" element={<ListaAnimais />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Signin />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
