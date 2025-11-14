import { useState } from "react"
import * as S from "./style"

const OptionsPayment = ({ onChoosePayment }) => {
  const [select, setSelect] = useState("");

  const optionPix = () => {
    return setSelect("pix")
  };

  const optionCredit = () => {
    return setSelect("credit")
  };


  return (
    <S.Container>
      <S.TitleContainer>Selecione a forma de pagamento</S.TitleContainer>
      <S.OptionPix
        $select={select === "pix"}
        onClick={optionPix}
      >
        <S.Image />
        <S.Title>Pix</S.Title>
      </S.OptionPix>
      <S.OptionCartao
        $select={select === "credit"}
        onClick={optionCredit}
      >
        <span className="material-symbols-outlined">
          payment_card
        </span>
        <S.TitleContainer>
          <S.Title>Cartão de Credito</S.Title>
          <S.Phrase>2x sem surpresa – R$16,71</S.Phrase>
        </S.TitleContainer>
      </S.OptionCartao>
      <S.Button onClick={() => onChoosePayment(select)}>AVANÇAR</S.Button>
    </S.Container>
  )
}

export default OptionsPayment;