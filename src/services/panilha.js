const verificarNome = async (name) => {
  if(!name || !name.trim()) return "invalido"

  const url = `http://cineagapeverificacaodenome.onrender.com/verificar-nome?nome=${name}`;
  try {
    const response = await fetch(url);
    const resultado = await response.text();
    
    return resultado;
  } catch(error) {
    console.log(error);
  };
};

export default verificarNome;