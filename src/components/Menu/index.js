import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

const Menu = ({ Type = "menu" }) => {
  const navigate = useNavigate();

  return (
    <C.Menu type={Type}>
      <C.Grupo>
        <C.MenuItem onClick={() => { navigate("/Resgate");}}>Resgate</C.MenuItem>
        <C.MenuItem onClick={() => { navigate("/Adote");}}>Adote</C.MenuItem>
        <C.MenuItem onClick={() => { navigate("/Doe");}}>Doe</C.MenuItem>
        <C.MenuItem onClick={() => { navigate("/Contribua");}}>Contribua</C.MenuItem>
      </C.Grupo>
      <C.Grupo>
        <C.Contato>
          sospets.ong@gmail.com
          48-99999-9999
          Florianópolis
          SC
        </C.Contato>
      </C.Grupo>
    </C.Menu>
  );
};

export default Menu;
