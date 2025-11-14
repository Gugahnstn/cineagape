import styled from "styled-components";

export const ImageComponent = styled.img` 
  display: block;
`;

export const DivComponent = styled.div`
    align-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    a {
        justify-content: center;
        text-align: center;
        padding-top: 24px;
        font-size: 24px;
        color: #ffff;
        display: flex;
    }

    a:hover {
        color: blue;
    }

`;

export const Background = styled.div`
    background-color: #8B0000;
    height: 100vh;
    display: flex;
`;