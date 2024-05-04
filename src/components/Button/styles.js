import styled from "styled-components";


export const Button = styled.button`
  padding: 9px 0px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #B0E0E6;
  font-weight: 600;
  font-size: 13px;
  max-width: 100px;
  margin-left: 10px;
  
  &:active {
    transform: translateY(2px);
  }
`;
