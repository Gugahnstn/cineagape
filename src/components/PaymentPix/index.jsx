import WhatsappImage from "../../assets/image/whatsapp.png";
import { createStaticPix } from "pix-utils";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import * as S from "./style";

const PaymentPix = ({ onCopied }) => { // recebe a função do pai

  const [brCode, setBrCode] = useState("");

  useEffect(() => {
    // Busca o BR Code da API
    fetch("/api/pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionAmount: 15.11 })
    })
      .then(res => res.json())
      .then(data => {
        if (data.brCode) setBrCode(data.brCode);
      })
      .catch(err => console.error(err));
  }, []);

  const redirecionar = () => {
    window.open("https://api.whatsapp.com/send/?phone=71988851845&text&type=phone_number&app_absent=0");
  }

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
