import { InputMask } from "@react-input/mask";
import styled from "styled-components";

export const InputTelefone = styled(InputMask)`
  width: 550px;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  border-style: solid;
  outline: none; 
  display: flex;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #E11616;
  }

  @media (max-width: 768px) {
    width: 315px;
  
  }
`;

export const Phrase = styled.p`
  margin-bottom: 4px;
  margin-top: 1rem;
  font-weight: 400;

  span {
    color: #e11616;
  }
`