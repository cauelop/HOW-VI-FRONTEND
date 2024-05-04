/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext, useRef } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAxiosLogin from "../../hooks/useAxiosLogin.ts";
import AuthContext from "../../contexts/auth.tsx";
import { url } from "../../conexao";

const Signin = () => {
  const navigate = useNavigate();
  const passwordRef = useRef(null);

  const [formValues, setFormValues] = useState({
    email: "",
    senha: "",
  });
  
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const { fetch, loading, loginInfo, error: axiosError } = useAxiosLogin(
    url,
    formValues.email,
    formValues.senha,
    false
  );  

  useEffect(() => {
    if (loginInfo.token !== null) {
      signIn(
        loginInfo.token,
        loginInfo.email,
        loginInfo.nome,
        loginInfo.celular,
        loginInfo.estado,
        loginInfo.cidade,
        loginInfo.id,
      );
      navigate("/adote");
    }

    if (axiosError) {
      
      // Definir o erro corretamente
      if (axiosError.response && axiosError.response.status === 401) {
        setError("Senha incorreta");
      } else {
        setError("Falha no login");
      }
    } else {
      setError(""); // Limpar o erro quando não houver erro
    }
  }, [loginInfo, axiosError, formValues, navigate, signIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    fetch();
  };

  return (
    <>
      <C.Page>
        <Header></Header>
    <C.Container>
    <Menu></Menu>
    <C.ActualPage>
      <C.Content>
      <C.Label>SOSPets - Login</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={formValues.senha}
          onChange={(e) =>
            setFormValues({ ...formValues, senha: e.target.value })
          }
          innerRef={passwordRef}
        />
        {error && <C.LabelError>{error}</C.LabelError>}
        <Button Text="Entrar" onClick={handleLogin} />
        {/* <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup> */}
      </C.Content>
      </C.ActualPage>
    </C.Container>
    </C.Page>
    </>
  );
};

export default Signin;
