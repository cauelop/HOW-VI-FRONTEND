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
  display: flex;
  background-color: #f0f2f5;
  align-items: center;
  justify-content: center; 
  overflow-y: auto;
`;

export const Title = styled.h2``;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;