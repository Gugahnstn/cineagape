import Filme from "../../assets/image/6081c103e3c9aedfa8720b8a055c3f54 2.svg"
import styled from "styled-components";

export const DivComponent = styled.div`
  background-color: #8B0000;
  display: flex;
  height: 100vh;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 47.4vh;

    display: flex;

    img {
      justify-content: center;
      height: 269px;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const Central = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-left: 1vw;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const ImageDiv = styled.div`
  background-image: url(${Filme});
   background-size: cover; /* cobre toda a área */
   background-position: center; /* centraliza o corte */
   background-repeat: no-repeat;
   display: flex;
   padding-left: 2rem;
   height: 68vh;
   width: 46vw;

  @media (max-width: 768px) {
    background-size: cover; /* cobre toda a área */
    background-position: center; /* centraliza o corte */
    background-repeat: no-repeat;
    margin: 24px auto;
    height: 296px;
    width: 296px;

  
  }
`
export const DivText = styled.div`
  flex-direction: column;
  margin-left: 10px;
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const Title = styled.h1`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 80px;
  width: 60%;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: justify;
  font-size: 20px;
  font-weight: 400;
  width: 50%;
`;

export const ContainerMain = styled.main`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    min-width: 100vw;
    height: 125vh;
    display: block;
  
  }
`;

//Descrição

//Forms

export const Recontainer = styled.div`
  justify-content: center; /* centraliza Recontainer verticalmente */
  flex-direction: column;
  margin: 0 auto;
  display: flex;

  img {
    display: flex;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    background-color: #FFFF;
    padding: 48px 0px;
    width: 369px;
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    z-index: 1;

    img {
      width: 123px;
      height: 74px;
    }
  }
`;

export const Phrase = styled.p`
  text-align: center;
  font-size: 24px;
  padding-top: 24px;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const Footer = styled.div`
  border-top: 1.5px solid rgba(0, 0, 0, 0.3);
  background-color: #ffff;
  text-align: center;
  width: 50%;
  bottom: 0;
  right: 0;
  position: fixed; /* fixa no fim da tela */
  padding: 18px;
  z-index: 2;

  p {
    font-weight: 700;
  }

  p > a{
    color: #024BE9;
  }

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
  }
`

export const LinkGroup = styled.a`
  text-align: center;
  margin-top: 24px;
  color: #024BE9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Termo = styled.div`

`;

export const CopiedText = styled.p`
  padding: 12px 16px;
  background-color: green;
  display: inline-flex;
  margin: 0 auto;
  align-items: center;
  position: fixed;
  font-weight: 500;
  border-radius: 6px;
  gap: 8px;
  top: 10vh;
  left: 75vw;
  z-index: 10;
  color: #ffff;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: translateX(-50%);

  @media (max-width: 768px) {
    padding: 12px 24px;
    width: 348px;
    top: 2vh;
    left: 50vw;
  }

`;

export const PhraseDuv = styled.p`
  margin-top: 16px;
  text-align: center;
  font-weight: 700;

  a{
    color: #024BE9;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }

`;