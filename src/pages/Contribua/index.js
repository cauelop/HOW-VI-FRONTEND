import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";
import qrcode1Image from "../../assets/qrcode1.png";

const Contribua = () => {
  return (
    <>
      <C.Page>
        <Header />
        <C.Container>
          <Menu />
          <C.ActualPage>
            <C.Content>
              <C.Label>Contribua e salve vidas!</C.Label>
              <C.Text>
                <h4>Junte-se a nós para ajudar animais resgatados a encontrarem amor e cuidado.</h4><br></br>
                <p>Suas doações fornecerão:</p><br></br>
                <ul>
                  <li>Ração</li>
                  <li>Castrações</li>
                  <li>Tratamento veterinário</li><br></br>
                </ul>
                <p>Cada contribuição faz a diferença na vida de um animal necessitado!</p><br></br>
                <p>Obrigado por fazer parte desta missão.</p><br></br>
              </C.Text>
              <C.QRCodeContainer>
                <h4>Você pode contribuir diretamente pelo pix da sospets que está no QRcode abaixo:</h4><br></br>
                <C.ImagemQrcode1 src={qrcode1Image} alt="qrcode" />
              </C.QRCodeContainer>
            </C.Content>
          </C.ActualPage>
        </C.Container>
      </C.Page>
    </>
  );
};

export default Contribua;
