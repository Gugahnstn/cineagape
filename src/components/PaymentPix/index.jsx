import WhatsappImage from "../../assets/image/whatsapp.png";
import { createStaticPix } from "pix-utils";
import { QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";
import * as S from "./style";

const PaymentPix = ({ onCopied, onComplete }) => { 

  const pix = createStaticPix({
    pixKey: "ad250fb6-ed25-4797-8f39-360b503158f4",
    merchantName: "GUSTAVO NOGUEIRA",
    merchantCity: "SALVADOR",
    transactionAmount: parseFloat(15.11) || undefined,
    infoAdicional: "CINÉAGAPE - INGRESSO - HORÁRIO: 14h30"
  });

  const brCode = pix.toBRCode();

  const redirecionar = () => {
    window.open("https://api.whatsapp.com/send/?phone=71988851845&text&type=phone_number&app_absent=0");
  }

  useEffect(() => {
    if (typeof onComplete === "function") {
      onComplete(); 
    }
  }, [onComplete]);

  const copied = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(brCode)
        .then(() => {
          onCopied(); // dispara a função do pai
        })
        .catch(err => console.error("Erro ao copiar:", err));
    } else {
      // fallback
      const el = document.createElement("textarea");
      el.value = brCode;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        onCopied(); // dispara a função do pai
      } catch (err) {
        console.error("Erro ao copiar:", err);
      }
      document.body.removeChild(el);
    }
  };

  return (
    <S.Container>
      <QRCodeSVG value={brCode} size={200} />
      <S.ContainerInput onClick={copied}>
        <S.InputCopied value={brCode} readOnly />
        <span className="material-symbols-outlined">
          content_copy
        </span>
      </S.ContainerInput>
      <S.ButtonWhats onClick={redirecionar}>
        <S.ImageDiv />
        <p>ENTRE NO GRUPO DO WHATSAPP</p>
      </S.ButtonWhats>
    </S.Container>
  );
}

export default PaymentPix;
