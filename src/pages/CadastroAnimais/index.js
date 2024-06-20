import React, { useState, useEffect } from "react";
import Header from "../../components/Header/index.js";
import Menu from "../../components/Menu/index.js";
import * as C from "./styles.js";
import Input from "../../components/Input/index.js";
import Select from "../../components/Select/index.js";
import Button from "../../components/Button/index.js";
import { useAxiosCadastroAnimais } from "../../hooks/useAxiosCadastroAnimais.ts";
import { url } from "../../conexao/index.js";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios.ts";

const CadastroAnimais = () => {

  const { data: dataEspecies, error: errorEspecies } = useAxios(url, "/especies", true);

  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    especie: "",
    nome: "",
    porte: "",
    observacoes: "",
    file: null, // Estado para armazenar a foto selecionada
  });

  const { fetch, data } = useAxiosCadastroAnimais(
    url,
    "/cadastroAnimais",
    formValues.especie,
    formValues.nome,
    formValues.porte,
    formValues.observacoes,
    formValues.file
  );

  const handleCadastroAnimais = (e) => {
    e.preventDefault();

    console.log(formValues.especie)

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
    console.log(data);

    if (data && data.affectedRows && data.affectedRows > 0) {
      alert("Animal cadastrado com sucesso");
      navigate("/ListaAnimais");
    }
  }, [data, navigate]);

  return (
    <>
      <C.Page>
        <Header />
        <C.Container>
          <Menu />
          <C.ActualPage>
            <C.Content>
              <C.Label>Faça o cadastro do animal!</C.Label>
              <Select
                id="especie"
                value={formValues.especie}
                onChange={(e) =>
                  setFormValues({ ...formValues, especie: e.target.value })
                }
              >
                <option value="" disabled>
                  Selecione a espécie do animal
                </option>
                {dataEspecies && dataEspecies.map((species, index) => (
                  <option key={index} value={species.idespecie}>
                    {species.nome}
                  </option>
                ))}
              </Select>
              <Input
                type="text"
                placeholder="Digite o nome do animal"
                value={formValues.nome}
                onChange={(e) =>
                  setFormValues({ ...formValues, nome: e.target.value })
                }
              />
              <Input
                type="text"
                placeholder="Digite o porte do animal"
                value={formValues.porte}
                onChange={(e) =>
                  setFormValues({ ...formValues, porte: e.target.value })
                }
              />
              <Input
                type="text"
                placeholder="Digite observações sobre esse animal"
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
              <Button Text="Confirmar" onClick={handleCadastroAnimais} />
            </C.Content>
          </C.ActualPage>
        </C.Container>
      </C.Page>
    </>
  );
};

export default CadastroAnimais;
