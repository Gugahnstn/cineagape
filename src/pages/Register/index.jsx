import OptionsPayment from "../../components/OptionsPayment";
import PaymentPix from "../../components/PaymentPix";
import TermsModal from "../../components/TermsModal";
import FormsComponent from "../../components/Forms";
import Logo from "../../assets/image/Logo-2.svg";

import * as S from "./style";
import { useState, useEffect } from "react";

const RegisterComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [state, setState] = useState(() => {
        return parseInt(localStorage.getItem("currentStep")) || 0;
    });
    const [copiedMessage, setCopiedMessage] = useState(false);

    useEffect(() => {
        localStorage.setItem("currentStep", state);
    }, [state]);

    const handleNextStep = (value) => {
        if (value === false) {
            setState(1);
        }
    };

    const handleNextStepPix = (option) => {
        if (option === "pix") {
            setState(2);
        } else if (option === "credit") {
            window.location.href = "https://mpago.li/2r5hcRe";
        } else {
            console.error("Não funcionou");
        }
    };

    const handlePaymentComplete = () => {
        localStorage.removeItem("currentStep");
    };

    const handlerVisible = (value) => {
        if (value === true) {
            setModalVisible(true);
        } else if (value === false) {
            setModalVisible(false)
        }
    };

    const handleCopied = () => {
        setCopiedMessage(true);
        setTimeout(() => setCopiedMessage(false), 2000);
    };

    return (
        <S.ContainerMain>
            <S.DivComponent>
                <S.Central>
                    <S.ImageDiv />
                    <S.DivText>
                        <S.Title>AMOR DE REDENÇÃO</S.Title>
                        <S.Description>
                            O relacionamento de um jovem casal se choca com as duras realidades da Corrida do Ouro na Califórnia de 1850. Angel, experimentando o amor pela primeira vez e enfrentando demônios que parecem insuperáveis, foge da nova vida que ela acha que não merece. No entanto, durante a busca de Michael pela sua amada, Angel descobre que ela tem o poder de escolher a vida que quer.
                        </S.Description>
                        <iframe
                            width="580"
                            height="273"
                            src="https://www.youtube.com/embed/9WmwCkmKcio"
                            title="Amor de Redenção | Trailer | Dublado (Brasil) (FHD)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </S.DivText>
                </S.Central>
            </S.DivComponent>

            <S.Recontainer>
                <img src={Logo} alt="Logo" />
                <S.Phrase>INSCRIÇÃO PARA O CINEMA</S.Phrase>

                <div style={{ display: state === 0 ? "block" : "none" }}>
                    <FormsComponent
                        termsClick={() => handlerVisible(true)}
                        onNextStep={handleNextStep}
                    />
                </div>
                <div style={{ display: state === 1 ? "block" : "none" }}>
                    <OptionsPayment 
                        onChoosePayment={handleNextStepPix} 
                    />
                </div>
                {state === 2 && (
                    <PaymentPix onCopied={handleCopied} onComplete={handlePaymentComplete}/>
                )}

                {(state === 0 || state === 1) && (
                    <S.LinkGroup href="https://chat.whatsapp.com/JWFbovNmkaQDmpPKIA3i6K?mode=wwt">Entre no grupo para ter mais informações</S.LinkGroup>
                )}
                {state === 2 && (
                    <S.PhraseDuv>Tire Dúvida com o organizador: <a href="https://api.whatsapp.com/send/?phone=71988851845&text&type=phone_number&app_absent=0">Gustavo Nogueira</a></S.PhraseDuv>
                )}
            </S.Recontainer>

            <S.Footer>
                <p>
                    Qualquer dúvida sobre o evento entre em contato com: <a href="https://api.whatsapp.com/send/?phone=71988851845&text&type=phone_number&app_absent=0">(71) 98885-1845</a>
                </p>
            </S.Footer>

            <TermsModal
                visible={modalVisible}
                closeModal={() => handlerVisible(false)}
            />

            <S.CopiedText visible={copiedMessage}>
                <span className="material-symbols-outlined">check_circle</span>
                Código Pix Copiado com sucesso!
            </S.CopiedText>
        </S.ContainerMain>
    );
};

export default RegisterComponent;
