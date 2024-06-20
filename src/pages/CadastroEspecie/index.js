import React, { useState, useEffect} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAxiosCadastroEspecie } from "../../hooks/useAxiosCadastroEspecie.ts";
import { url } from "../../conexao";
import { useNavigate } from "react-router-dom";


const CadastroEspecie = () => {
  
  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    nome: "",
    habitat_natural: "",
    expectativa_vida: "",
  });

  const {fetch, data} = useAxiosCadastroEspecie(
    url,
    "/cadastroEspecies",
    formValues.nome,
    formValues.habitat_natural,
    formValues.expectativa_vida,
  )

  const handleCadastroEspecie = (e) => {
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

    console.log(data)

    if (data && data.affectedRows && data.affectedRows > 0) {

      alert("Espécie cadastrada com sucesso");
      navigate("/CadastroAnimais");
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
            <C.Label>Faça o cadastro da espécie!</C.Label> 
            <Input
              type="nome"
              placeholder="Digite qual é o nome desta espécie"
              value={formValues.nome}
              onChange={(e) =>
                setFormValues({ ...formValues, nome: e.target.value })
              }
            />
            <Input
              type="habitat_natural"
              placeholder="Digite qual é o habitat natural desta espécie"
              value={formValues.habitat_natural}
              onChange={(e) =>
                setFormValues({ ...formValues, habitat_natural: e.target.value })
              }
            />
            <Input
              type="expectativa_vida"
              placeholder="Digite qual é a expectativa de vida desta espécie"
              value={formValues.porte}
              onChange={(e) =>
                setFormValues({ ...formValues, expectativa_vida: e.target.value })
              }
            />
              
              {error && <C.LabelError>{error}</C.LabelError>}    
              <Button Text="Confirmar" onClick={handleCadastroEspecie} />
            </C.Content>
          </C.ActualPage>  
        </C.Container>
      </C.Page>
    </>
  );
};

export default CadastroEspecie;