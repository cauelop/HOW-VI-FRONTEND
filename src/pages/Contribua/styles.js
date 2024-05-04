import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ActualPage = styled.div`
  width: 100%;
  height: 85vh;
  max-height: 85vh;
  min-height: calc(80vh - 50px);
  display: flex;
  background-color: #f0f2f5;
  align-items: flex-start;
  justify-content: center; 
`;

export const Title = styled.h2``;

export const Content = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 99%; /* Ajuste a largura conforme necessário */
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  padding: 35px;
  border-radius: 5px;
  margin-top: 0px; /* Adiciona margem superior para posicionar abaixo do cabeçalho */
  height: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Text = styled.label`
margin-top: 45px;
`;

export const ImagemQrcode1 = styled.img`
width: 150px;
height: auto;
align-items: rigth;
`;

export const QRCodeContainer = styled.div`
  flex: 1; /* Ocupa todo o espaço disponível na coluna do QR code */
  display: flex;
  flex-direction: column;
  align-items: center;
`;