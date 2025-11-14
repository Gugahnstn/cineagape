import styled from "styled-components";

export const FormComponent = styled.form`
  @media (max-width: 768px) {
    width: 320px;
    margin: 0 auto;
  }
`;
export const InputComponent = styled.input`
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
`;

export const ContributionQuestion = styled.input.attrs({type: "radio"})`
  transform: scale(1.2);
  accent-color: #E11616;
  cursor: pointer;
  margin-right: 8px;
`;
export const ButtonComponent = styled.button`
    
`;

export const Contribution = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  

  label {
    display: block;
  }
`

export const PhraseForm = styled.p`
  margin-bottom: 4px;
  margin-top: 1rem;
  font-weight: 400;

  span {
    color: #E11616;
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  
`;

export const Label = styled.label`
  font-weight: 400;
`

export const CheckboxDiv = styled.div`
  margin-top: 12px;
`

export const Checkout = styled.input.attrs({type: "checkbox"})`
  margin-right: 0.4rem;
  accent-color: #E11616;
`

export const LabelCheckbox = styled.label`
  font-size: 15.3px;
  font-weight: 400;
  display: block;

  @media (max-width: 768px) {
    width: 92%;
    text-align: justify;
  }
`

export const Button = styled.button`
  background-color: #E11616;
  margin: 36px auto 0 auto;
  padding: 18px 170px;
  border-style: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  display: block;
  color: #FFFF;
  cursor: pointer;

  &:hover{
    background-color: #B91212;
  }

  &:active{
    background-color: #E11616;
  }

  @media (max-width: 768px) {
    margin: 12px auto 0 auto;
    padding: 18px 112px;  
  }
`;

export const SpanTermo = styled.span`
  text-decoration: underline;
  color: #024BE9;
  cursor: pointer;
`

export const Span = styled.span`
  color: #E11616;
`
