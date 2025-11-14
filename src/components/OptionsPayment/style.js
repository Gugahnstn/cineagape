import PixImage from "../../assets/image/pix 1.svg";
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  gap: 16px;

  @media (max-width: 400px) {
    align-items: center;
  }
`

export const OptionPix = styled.div`
  border: 2px solid ${({$select}) => (!$select ? "#000000": "#8B0000")};
  transition: all 0.3s ease;
  border-radius: 6px;
  padding: 24px 20px;
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 12px;

  @media (max-width: 400px) {
    padding: 24px 12px;
    width: 300px;
  }
`

export const OptionCartao = styled.div`
  border: 2px solid ${({$select}) => (!$select ? "#000000": "#8B0000")};
  transition: all 0.3s ease;
  align-items: center;
  border-radius: 6px;
  padding: 24px 20px;
  cursor: pointer;
  display: flex;
  gap: 12px;

  .material-symbols-outlined {
    font-size: 40px;
  } 

  @media (max-width: 400px) {
    padding: 24px 12px;
    width: 300px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 20px;
  @media (max-width: 400px) {
    font-size: 16px;
  }

`

export const Title = styled.h1`
  font-size: 20px;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export const Phrase = styled.p`
  font-size: 13px;
  text-align: left;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`

export const Image = styled.div`
  background-image: url(${PixImage});
  background-size: cover; /* cobre toda a área */
  background-position: center; /* centraliza o corte */
  background-repeat: no-repeat;
  height: 32px;
  width: 32px;
`;

export const Button = styled.div`
  background-color: #E11616;
  margin: 12px auto 0 auto;
  padding: 18px 170px;
  border-style: none;
  border-radius: 4px;
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

  @media (max-width: 400px) {
    padding: 16px 112px;  
  }
`;