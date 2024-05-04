import React, { useState, useEffect} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAxiosDoe } from "../../hooks/useAxiosDoe.ts";
import { url } from "../../conexao";
import { useNavigate } from "react-router-dom";


const Doe = () => {

  const [codUsuario] = useState(localStorage.getItem("@SideKickAuth:id"))
  
  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    tipo: "",
    nome: "",
    sexo: "",
    castrado: "",
    vacinado: "",
    idade: "",
    porte: "",
    raca: "",
    observacoes: "",
    file: null, // Estado para armazenar a foto selecionada
  });

  const {fetch, data} = useAxiosDoe(
    url,
    "/doe",
    formValues.tipo.toUpperCase(),
    formValues.nome.toUpperCase(),
    formValues.raca.toUpperCase(),
    formValues.porte.toUpperCase(),
    formValues.sexo.toUpperCase(),
    formValues.castrado,
    formValues.vacinado,
    formValues.idade,
    formValues.observacoes,
    codUsuario,
    formValues.file
  )

  const handleDoe = (e) => {
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

  // Função para lidar com a seleção de uma foto
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtém o primeiro arquivo selecionado

    if (file) {
      setFormValues({ ...formValues, file });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {

    console.log(data)

    if (data && data.affectedRows && data.affectedRows > 0) {

      alert("Animal cadastrado com sucesso");
      navigate("/Adote");
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
            <C.Label>Faça o cadastro do animalzinho!</C.Label> 
            <Input
              type="tipo"
              placeholder="Digite qual é o tipo do animal"
              value={formValues.tipo}
              onChange={(e) =>
                setFormValues({ ...formValues, tipo: e.target.value })
              }
            />
            <Input
              type="nome"
              placeholder="Digite o nome do animal"
              value={formValues.nome}
              onChange={(e) =>
                setFormValues({ ...formValues, nome: e.target.value })
              }
            />
            <Input
              type="sexo"
              placeholder="Digite o sexo do animal"
              value={formValues.sexo}
              onChange={(e) =>
                setFormValues({ ...formValues, sexo: e.target.value })
              }
            />
            <Input
              type="castrado"
              placeholder="Digite se é castrado ou não"
              value={formValues.castrado}
              onChange={(e) =>
                setFormValues({ ...formValues, castrado: e.target.value })
              }
            />
            <Input
              type="vacinado"
              placeholder="Digite se é vacinado ou não"
              value={formValues.vacinado}
              onChange={(e) =>
                setFormValues({ ...formValues, vacinado: e.target.value })
              }
            />
            <Input
              type="idade"
              placeholder="Digite a idade aproximada do animal"
              value={formValues.idade}
              onChange={(e) =>
                setFormValues({ ...formValues, idade: e.target.value })
              }
            />
            <Input
              type="porte"
              placeholder="Digite qual é o porte do animal"
              value={formValues.porte}
              onChange={(e) =>
                setFormValues({ ...formValues, porte: e.target.value })
              }
            />
            
            <Input
              type="raca"
              placeholder="Digite a raça do animal"
              value={formValues.raca}
              onChange={(e) =>
                setFormValues({ ...formValues, raca: e.target.value })
              }
            />
            <Input
              type="observacoes"
              placeholder="Digite observações do animal"
              value={formValues.observacoes}
              onChange={(e) =>
                setFormValues({ ...formValues, observacoes: e.target.value })
              }
            />

              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px" }}>
                  Anexe uma foto do animal:
                </span>
                <input
                  type="file"
                  name="file"
                  accept="image/*" // Aceita apenas arquivos de imagem
                  onChange={handleFileChange} // Chama a função quando o arquivo é selecionado
                />
              </div>
              
              {error && <C.LabelError>{error}</C.LabelError>}    
              <Button Text="Confirmar" onClick={handleDoe} />
            </C.Content>
          </C.ActualPage>  
        </C.Container>
      </C.Page>
    </>
  );
};

export default Doe;