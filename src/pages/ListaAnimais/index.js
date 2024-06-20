import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import useAxios from "../../hooks/useAxios.ts";
import { url } from "../../conexao";
import Select from "../../components/Select";

const ListaAnimais = () => {
  const { data, error } = useAxios(url, "/animais", true);
  const { data: dataEspecies, error: errorEspecies } = useAxios(url, "/especies", true);

  const [selectedEspecie, setSelectedEspecie] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    console.log("Animais:", data);
    if (error) {
      console.log("Erro ao carregar animais:", error);
    }
    if (data) {
      setFilteredAnimals(
        selectedEspecie
          ? data.filter((animal) => animal.idespecie === parseInt(selectedEspecie))
          : data
      );
    }
  }, [data, error, selectedEspecie]);

  function capitalizeFirstLetterOfEachWord(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  return (
    <>
      <C.Page>
        <Header />
        <C.Container>
          <Menu />
          <C.ActualPage>
            <C.Content>
              <C.Label></C.Label>
              <div className="filter-container">
                <Select
                  id="especie"
                  value={selectedEspecie}
                  onChange={(e) => setSelectedEspecie(e.target.value)}
                >
                  <option value="">Selecione as espécies</option>
                  {dataEspecies &&
                    dataEspecies.map((species, index) => (
                      <option key={index} value={species.idespecie}>
                        {species.nome}
                      </option>
                    ))}
                </Select>
              </div>
              <C.ListaAnimais>
                {filteredAnimals.length > 0 ? (
                  filteredAnimals.map((animal, index) => (
                    <div key={index} className="animal">
                      <img src={url + "/imagens/animais/" + animal.nomefoto} alt={animal.nome} />
                      <div className="animal-info">
                        <p>Especie: {capitalizeFirstLetterOfEachWord(animal.especie)}</p>
                        <p>Nome: {capitalizeFirstLetterOfEachWord(animal.nome)}</p>
                        <p>Porte: {capitalizeFirstLetterOfEachWord(animal.porte)}</p>
                        <p>Observacoes: {capitalizeFirstLetterOfEachWord(animal.observacoes)}</p>
                        <p>Habitat natural: {capitalizeFirstLetterOfEachWord(animal.habitat)}</p>
                        <p>Expectativa de vida: {animal.expectativa}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Carregando...</p>
                )}
              </C.ListaAnimais>
            </C.Content>
          </C.ActualPage>
        </C.Container>
      </C.Page>
    </>
  );
};

export default ListaAnimais;
