import styled from "styled-components";
import { primaryColor } from "../../colors";

export const Header = styled.header`
  padding: 10px 10px;
  width: 100%;
  background-color: ${primaryColor};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  height: 15vh;
`;



export const TextNome = styled.span`
  font-size: 15px;
  color: black;
  margin-right: 10px; /* Adiciona um espaçamento entre o nome e o botão Sair */
  max-width: 200px; /* Define uma largura máxima para o nome */
  overflow: hidden; /* Impede que o nome ultrapasse a largura máxima */
  text-overflow: ellipsis; /* Adiciona reticências para indicar texto truncado, se necessário */
  white-space: nowrap; /* Impede que o texto seja quebrado em várias linhas */
`;

export const ContainerDireita = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
`;

export const Botoes = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const ImagemLogo = styled.img`
width: 110px;
height: auto;
cursor: pointer;
`;


