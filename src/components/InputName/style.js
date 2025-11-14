import styled from "styled-components";

export const Phrase = styled.p`
  margin-bottom: 4px;
  margin-top: 1rem;
  font-weight: 400;

  span {
    color: #e11616;
  }
`;

export const Input = styled.input`
  transition: border-color 0.3s ease;
  border-style: solid;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 16px;
  outline: none; 
  display: flex;
  width: 550px;

  &:focus {
    border-color: #E11616;
  }

  @media (max-width: 768px) {
    width: 315px;

  
  }
`;