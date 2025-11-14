import { useState } from 'react'
import * as S from './style'

const InputTel = ({name}) => {
  const [cel, setCel] = useState("");

  return (
    <>
      <S.Phrase>Celular: <span>*</span></S.Phrase>
      <S.InputTelefone 
        id="telefone" mask="(__) _____-____" 
        replacement={{ _: /\d/ }} 
        placeholder="(71) 98765-4321" 
        inputMode="numeric"
        onChange={(e) => setCel(e.target.value)} 
        value={cel}
        name={name}
        type="text"      
        required/>
    </>
  )
}

export default InputTel;