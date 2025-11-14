import { useState } from "react";
import * as S from "./style";

const TermsModal = ({ visible, closeModal, confirmCloseModal }) => {

  return (
    <>
      <S.Overlay visible={visible}>
        <S.Modal>
          <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>

          <S.Content>
            <S.Title>📝 Termos de Inscrição — Sessão de Cinema</S.Title>

            <S.Paragraph>
              Ao realizar sua inscrição e efetuar o pagamento de <strong>R$ 15,11</strong> (quinze reais e onze centavos),
              o participante declara estar de acordo com os termos abaixo:
            </S.Paragraph>

            <S.SectionTitle>Valor e pagamento</S.SectionTitle>
            <S.Paragraph>
              O valor da inscrição é de <strong>R$ 15,11</strong>, podendo ser pago por <strong>PIX</strong> ou
              <strong> cartão de crédito/débito via Mercado Pago</strong>.
            </S.Paragraph>

            <S.SectionTitle>Pagamento no cartão de crédito</S.SectionTitle>
            <S.Paragraph>
              Devido à taxa do Mercado Pago, o valor pago no <strong>cartão de crédito</strong> fica no total de
              <strong> R$ 16,71</strong>.
            </S.Paragraph>

            <S.SectionTitle>Confirmação da inscrição</S.SectionTitle>
            <S.Paragraph>
              A vaga somente será garantida após a confirmação do pagamento.
            </S.Paragraph>

            <S.SectionTitle>Sem reembolso por desistência</S.SectionTitle>
            <S.Paragraph>
              O valor pago <strong>não será reembolsado</strong> em caso de desistência, atraso ou não comparecimento
              do participante.
            </S.Paragraph>

            <S.SectionTitle>Informações coletadas</S.SectionTitle>
            <S.Paragraph>
              Serão coletados <strong>nome completo</strong> e <strong>telefone</strong> apenas para confirmação da
              inscrição, comunicação sobre o evento e controle de presença.
            </S.Paragraph>

            <S.SectionTitle>Privacidade dos dados</S.SectionTitle>
            <S.Paragraph>
              As informações coletadas <strong>não serão compartilhadas com terceiros</strong> e serão utilizadas
              exclusivamente para fins relacionados à organização do evento.
              O participante pode solicitar a exclusão de seus dados após o evento, entrando em contato com a organização.
            </S.Paragraph>

            <S.SectionTitle>Alterações ou cancelamento do evento</S.SectionTitle>
            <S.Paragraph>
              Caso o evento seja adiado ou alterado, os inscritos serão avisados por telefone ou mensagem.
              Se o evento for <strong>cancelado pela organização</strong>, o participante terá direito a reembolso
              integral ou crédito para outra sessão, conforme sua preferência.
            </S.Paragraph>

            <S.SectionTitle>Direito de imagem</S.SectionTitle>
            <S.Paragraph>
              O participante autoriza o uso de sua imagem e voz em fotos e vídeos feitos durante o evento,
              para fins de divulgação em redes sociais e materiais promocionais, salvo manifestação contrária
              antes do início da sessão.
            </S.Paragraph>

            <S.SectionTitle>Contato</S.SectionTitle>
            <S.Paragraph>
              Para dúvidas ou solicitações:
              <a href="https://api.whatsapp.com/send/?phone=71988851845&text&type=phone_number&app_absent=0">
                (71) 98885-1845
              </a>.
            </S.Paragraph>
          </S.Content>
        </S.Modal>

      </S.Overlay>
    </>
  );
};

export default TermsModal;