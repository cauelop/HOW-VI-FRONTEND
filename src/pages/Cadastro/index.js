import React, { useState, useRef, useEffect } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import Button from "../../components/Button";
import { useAxiosUsuarios } from "../../hooks/useAxiosUsuarios.ts";
import { url } from "../../conexao";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

  const [formValues, setFormValues] = useState({
    nome:  "",
    email: "",
    celular: "",
    estado: "",
    cidade: "",
    senha: "",
  });

  const {fetch, data} = useAxiosUsuarios(
    url,
    "/usuariosSave",
    formValues.nome.toUpperCase(),
    formValues.email.toUpperCase(),
    formValues.celular.toUpperCase(),
    formValues.estado.toUpperCase(),
    formValues.cidade.toUpperCase(),
    formValues.senha,
  )

  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    // Verifique se algum campo está vazio
    const emptyFields = Object.values(formValues).some(value => value === "");

    if (emptyFields) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError(""); // Limpa qualquer mensagem de erro anterior
      fetch();
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.affectedRows && data.affectedRows > 0) {

      alert("Usuário cadastrado com sucesso");
      navigate("/Signin");
    }
  }, [data, navigate]);
  
 
  return (
    <>
      <C.Page>
        <Header></Header>
        <C.Container>
          <Menu></Menu>
          <C.ActualPage>
            <C.Content>
            <C.Label>Realize seu cadastro e ajude a salvar vidas.</C.Label>
            <Input
              type="nome"
              placeholder="Digite seu nome completo"
              value={formValues.nome}
              onChange={(e) =>
                setFormValues({ ...formValues, nome: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <Input
              type="celular"
              placeholder="Digite seu celular"
              value={formValues.celular}
              onChange={(e) =>
                setFormValues({ ...formValues, celular: e.target.value })
              }
            />
            <Input
              type="estado"
              placeholder="Digite seu estado"
              value={formValues.estado}
              onChange={(e) =>
                setFormValues({ ...formValues, estado: e.target.value })
              }
            />
            <Input
              type="cidade"
              placeholder="Digite sua cidade"
              value={formValues.cidade}
              onChange={(e) =>
                setFormValues({ ...formValues, cidade: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={formValues.senha}
              onChange={(e) =>
                setFormValues({ ...formValues, senha: e.target.value })
              }
              innerRef={passwordRef}
            />
            {error && <C.LabelError>{error}</C.LabelError>}
            <Button Text="Finalizar" onClick={handleCadastro} />
            
            </C.Content>
          </C.ActualPage>  
        </C.Container>
      </C.Page>
    </>
  );
};

export default Cadastro;
