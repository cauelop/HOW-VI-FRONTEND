import styled from "styled-components";
import { secondaryColor } from "../../colors";
import { primaryColor } from "../../colors";

export const Menu = styled.nav`
  width: 150px;
  height: 85vh;
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`;

export const Grupo = styled.div`
  width: 100%;
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.a`
  font-size: 16px;
  width: 100%;
  text-decoration: none;
  padding: 12px 20px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  


  &:hover {
    background-color: ${primaryColor};
    color: #89CFF0;
  }
`;

export const Contato = styled.a`
  font-size: 12px;
  width: 100%;
  text-decoration: none;
  text-align: center;
`;




