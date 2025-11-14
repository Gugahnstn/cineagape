import WhatsappImage from "../../assets/image/whatsapp.png";
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const ContainerInput = styled.div`
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    top: 10px;
    right: 6px;
  }

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48;
      color: inherit;
      text-decoration: none;
  }
  
  @media (max-width: 768px) { 
    span {
      position: absolute;
      top: 10px;
      right: 6px;
    }
  }
`

export const InputCopied = styled.input.attrs({ type: "text" })`
  caret-color: transparent;
  padding: 10px 40px 10px 12px;
  font-size: 16px;
  cursor: pointer;
  width: 447px;

  @media (max-width: 768px) { 
    padding: 10px 40px 10px 12px;
    font-size: 15px;
    width: 300px;
  }
`;

export const ButtonWhats = styled.div`
  -webkit-tap-highlight-color: transparent;
  border: 2px solid #32D951;
  justify-content: center;
  text-decoration: none;
  align-items: center; 
  padding: 12px 90px;
  border-radius: 6px;
  font-weight: 700;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  outline: none;
  gap: 8px;

  p:active {
    color: #ffff;
  }

  &:hover{
    background-color: #28B846;
    border-color: #28B846;
    color: #ffff;
  }

  &:active {
    background-color: #ffff;
    color: #000000;
  }

  @media (max-width: 768px) { 
    padding: 14px 56px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    gap: 4px;
  }
`;

export const ImageDiv = styled.div`
  background-image: url(${WhatsappImage});
  background-size: cover; /* cobre toda a área */
  background-position: center; /* centraliza o corte */
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  
  @media (max-width: 768px) { 
    height: 16px;
    width: 16px;
  }

`;
