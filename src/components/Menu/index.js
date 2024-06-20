import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Menu = ({ Type = "menu" }) => {
  const navigate = useNavigate();

  return (
    <C.Menu type={Type}>
      <C.Grupo>
        <C.MenuItem onClick={() => { navigate("/CadastroEspecie");}}>Cadastro de Espécies</C.MenuItem>
        <C.MenuItem onClick={() => { navigate("/CadastroAnimais");}}>Cadastro de Animais</C.MenuItem>
        <C.MenuItem onClick={() => { navigate("/ListaAnimais");}}>Lista de Animais</C.MenuItem>
       
      </C.Grupo>
      <C.Grupo>
        <C.Contato>
        </C.Contato>
      </C.Grupo>
    </C.Menu>
  );
};

export default Menu;
