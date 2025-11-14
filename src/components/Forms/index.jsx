import InputName from "../InputName";
import InputTel from "../InputTel";

import { useRef } from "react";
import * as S from "./style"

const FormsComponent = ({ termsClick, onNextStep }) => {
  const termos =
    "Li e concordo com os Termos de Inscrição e estou ciente da contribuição.";

  const formRef = useRef(null);
    
  const handleSubmit = (e) => {
    e.preventDefault(); // evita submit duplo
    formRef.current.submit(); // envia para o Google Forms
    onNextStep(false);
  }


  return (
    <>
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
      <S.FormComponent
        action="https://docs.google.com/forms/d/e/1FAIpQLSfahZXJBRx6WIpbO8tku9owGYvKdEgtgvENgnYVmZqv3Eh5zw/formResponse"
        method="POST"
        target="hidden_iframe"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <InputName name="entry.694552508" />
        <InputTel name="entry.2029067470" />

        <S.Contribution>
          <S.PhraseForm>
            Está ciente da contribuição?<span>*</span>
          </S.PhraseForm>

          <S.LabelDiv>
            <S.ContributionQuestion
              id="resposta-sim"
              type="radio"
              name="entry.890015418"
              value="Sim"
              required
            />
            <S.Label htmlFor="resposta-sim">Sim</S.Label>
          </S.LabelDiv>

          <S.LabelDiv>
            <S.ContributionQuestion
              id="resposta-nao"
              type="radio"
              name="entry.890015418"
              value="Não"
              required
            />
            <S.Label htmlFor="resposta-nao">Não</S.Label>
          </S.LabelDiv>
        </S.Contribution>

        <S.CheckboxDiv>
          <S.LabelCheckbox>
            <S.Checkout
              type="checkbox"
              name="entry.1158663436"
              value={termos}
              required
            />
            Li e concordo com os{" "}
            <S.SpanTermo onClick={termsClick}>Termos</S.SpanTermo> de Inscrição
            e estou ciente da contribuição.<S.Span>*</S.Span>
          </S.LabelCheckbox>
        </S.CheckboxDiv>

        <S.Button onSubmit={handleSubmit} type="submit">AVANÇAR</S.Button>
      </S.FormComponent>
    </>
  );
};

export default FormsComponent;
