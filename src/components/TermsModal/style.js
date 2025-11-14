import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.6);
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 999;
`;

export const Modal = styled.div`
  background: #fff;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  padding: 20px 20px 20px 20px; /* padding geral */
  max-height: 90vh;
  overflow-y: auto; /* MOBILE SCROLL */
  position: relative;
`;

export const Content = styled.div`
  margin-top: 30px; /* distância do topo, evita colar no CloseButton */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;       /* afastar do topo */
  right: 14px;     /* afastar da direita */
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
`;


export const Title = styled.h2`
  margin-bottom: 18px;
  text-align: center;
`;

export const SectionTitle = styled.h3`
  margin-top: 18px;
  margin-bottom: 6px;
`;

export const Paragraph = styled.p`
  margin-bottom: 12px;
  text-align: justify;
  line-height: 1.5;

  strong {
    color: #b90101ff;
  }

  a {
    color: #b90101ff;
    font-weight: 700;
  }
`;