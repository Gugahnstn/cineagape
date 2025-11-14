import { useState } from "react";
import * as S from "./style";

const InputName = ({name}) => {
  const [nome, setNome] = useState(null);

  return (
    <>
      <S.Phrase>Nome: <span>*</span></S.Phrase>
      <S.Input 
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
        name={name}
        value={nome}
        type="text"
        required
        />
    </>
  )
}

export default InputName;