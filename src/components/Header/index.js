import React from "react";
import * as C from "./styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logoImage from "../../assets/logo.png";

const Header = ({ Type = "header" }) => {
  const { signOut} = useAuth();
  const navigate = useNavigate();
  
  // Obtém o nome do usuário do localStorage
  const userName = localStorage.getItem('@SideKickAuth:nome');

  return (
    <C.Header type={Type}>
      <C.ImagemLogo src={logoImage} alt="Logo" onClick={() => {navigate("/ListaAnimais");}} />
      <C.ContainerDireita>
        {userName ? (
          <>
            <C.TextNome>{userName} </C.TextNome>
            <Button Text="Sair" onClick={() => { signOut(); navigate("/ListaAnimais");}}>
              Sair
            </Button>
          </>
        ) : (
          <C.Botoes>
            <Button Text="Entrar" onClick={() => navigate("/signin")}>
              Entrar
            </Button> 
            <Button Text="Cadastrar" onClick={() => navigate("/cadastro")}>
              Cadastrar
            </Button>
          </C.Botoes>
        )}
      </C.ContainerDireita>
    </C.Header>
  );
};

export default Header;