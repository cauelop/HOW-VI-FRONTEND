import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ActualPage = styled.div`
  height: 85vh;
  max-height: 85vh;
  display: flex;
  background-color: #f0f2f5;
  align-items: center;
  justify-content: center; 
  width: 100%;
`;

export const Title = styled.h2``;

export const Label = styled.label`
  padding: 1vh;
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-top: 0px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  border-radius: 5px;
  width: 99%;
  height: 98%;

`;

export const Botoes = styled.div`
  padding: 1vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 20%;
`;

export const ListaAnimais = styled.div`
  padding: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  max-height: 72vh;
  width: 100%;
  padding-left: 20px; /* Adiciona um espaçamento à esquerda */
  overflow-y: auto;

  .animal {
    display: flex;
    width: 48%;
    align-items: center;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .animal img {
    width: 100px;
    height: 100px;
    border-radius: 30%;
    margin-right: 20px;
  }

  .animal-info {
    flex-grow: 1;
  }
`;




