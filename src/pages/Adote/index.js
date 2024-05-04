import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import Button from "../../components/Button";
import useAxios from "../../hooks/useAxios.ts";
import { url } from "../../conexao"

const Adote = () => {
  const [filtroAnimal, setFiltroAnimal] = useState('TODOS');

  const filtrarAnimais = (tipo) => {
    setFiltroAnimal(tipo);
  };

  const { data, error } = useAxios(url, "/animais", true);

  useEffect(() => {
    console.log(data)
    if(error){
      console.log(error)
    }
  }, [data, error]);

  function capitalizeFirstLetterOfEachWord(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
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
              <C.Label>Adote e faça um animalzinho feliz!</C.Label>
              <C.Botoes>
                <Button Text="Todos" onClick={() => filtrarAnimais("TODOS")}>
                  Todos
                </Button>
                <Button Text="Cachorros" onClick={() => filtrarAnimais("CACHORRO")}>
                  Cachorros
                </Button>
                <Button Text="Gatos" onClick={() => filtrarAnimais("GATO")}>
                  Gatos
                </Button>
              </C.Botoes>

              <C.ListaAnimais>
                {data ? (
                  data
                    .filter(animal => {
                      if (filtroAnimal === 'TODOS') {
                        return true;
                      } else {
                        return animal.tipo === filtroAnimal;
                      }
                    })
                    .map((animal, index) => (
                      <div key={index} className="animal">
                        <img src={url+"/imagens/animais/"+animal.nomefoto} alt={animal.nome} />
                        <div className="animal-info">
                          <p>Nome: {capitalizeFirstLetterOfEachWord(animal.nome)}</p>
                          <p>Raça: {capitalizeFirstLetterOfEachWord(animal.raca)}</p>
                          <p>Porte: {capitalizeFirstLetterOfEachWord(animal.porte)}</p>
                          <p>Sexo: {capitalizeFirstLetterOfEachWord(animal.sexo)}</p>
                          <p>Informações: {animal.observacoes}</p>
                          <p>É castrado?: {animal.castrado}</p>
                          <p>É vacinado?: {animal.vacinado}</p>
                          <p>Idade: {animal.idade}</p>
                          <p>Contato: {animal.celular}</p>
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

export default Adote;



