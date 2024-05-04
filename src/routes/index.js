import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resgate from "../pages/Resgate";
import Adote from "../pages/Adote";
import Doe from "../pages/Doe";
import Contribua from "../pages/Contribua";
import Signin from "../pages/Signin";
import Cadastro from "../pages/Cadastro";



const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* <Route exact path="/home" element={<Private Item={Home} />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/doe" element={<Doe />} />
          <Route path="/contribua" element={<Contribua />} />
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
