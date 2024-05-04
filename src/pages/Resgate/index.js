import React, { useState, useEffect} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAxiosResgate } from "../../hooks/useAxiosResgate.ts";
import { url } from "../../conexao";


const Resgate = () => {

  const [codUsuario, setCodUsuario] = useState(localStorage.getItem("@SideKickAuth:id"))
  
  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    tipo: "",
    caracteristicas: "",
    motivo: "",
    estado: "",
    cidade: "",
    rua: "",
    ponto_referencia: "",
    urgencia: "",
  });

  const {fetch, data} = useAxiosResgate(
    url,
    "/resgate",
    formValues.tipo,
    formValues.caracteristicas,
    formValues.motivo,
    formValues.estado,
    formValues.cidade,
    formValues.rua,
    formValues.ponto_referencia,
    formValues.urgencia,
    codUsuario
  )

  const handleResgate = (e) => {
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
 
  useEffect(() => {

    console.log(data)

    if (data && data.affectedRows && data.affectedRows > 0) {

      alert("Chamado realizado com sucesso");
      setFormValues({
        tipo: "",
        caracteristicas: "",
        motivo: "",
        estado: "",
        cidade: "",
        rua: "",
        ponto_referencia: "",
        urgencia: "",
      });

    }
  }, [data]);

  return (
    <>
      <C.Page>
        <Header></Header>
        <C.Container>
          <Menu></Menu>
          <C.ActualPage>
            <C.Content>
            <C.Label>Abra um chamado abaixo</C.Label> 
            <Input
              type="tipo"
              placeholder="Digite qual é o animal"
              value={formValues.tipo}
              onChange={(e) =>
                setFormValues({ ...formValues, tipo: e.target.value })
              }
            />
            <Input
              type="caracteristicas"
              placeholder="Digite as características do animal"
              value={formValues.caracteristicas}
              onChange={(e) =>
                setFormValues({ ...formValues, caracteristicas: e.target.value })
              }
            />
            <Input
              type="motivo"
              placeholder="Digite o motivo do resgate"
              value={formValues.motivo}
              onChange={(e) =>
                setFormValues({ ...formValues, motivo: e.target.value })
              }
            />
            <Input
              type="estado"
              placeholder="Digite o estado (do resgate)"
              value={formValues.estado}
              onChange={(e) =>
                setFormValues({ ...formValues, estado: e.target.value })
              }
            />
            <Input
              type="cidade"
              placeholder="Digite a cidade (do resgate)"
              value={formValues.cidade}
              onChange={(e) =>
                setFormValues({ ...formValues, cidade: e.target.value })
              }
            />
            <Input
              type="rua"
              placeholder="Digite a rua (do resgate)"
              value={formValues.rua}
              onChange={(e) =>
                setFormValues({ ...formValues, rua: e.target.value })
              }
            />
            <Input
              type="ponto_referencia"
              placeholder="Digite um ponto de referência"
              value={formValues.ponto_referencia}
              onChange={(e) =>
                setFormValues({ ...formValues, ponto_referencia: e.target.value })
              }
            />
            <Input
              type="urgencia"
              placeholder="Digite o nível de urgência (1 a 10)"
              value={formValues.urgencia}
              onChange={(e) =>
                setFormValues({ ...formValues, urgencia: e.target.value })
              }
            />
            {error && <C.LabelError>{error}</C.LabelError>}    
              <Button Text="Confirmar" onClick={handleResgate} />   
            </C.Content>
          </C.ActualPage>  
        </C.Container>
      </C.Page>
    </>
  );
};

export default Resgate;
