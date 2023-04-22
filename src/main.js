function encriptar() {
  const expresion = /[^a-zA-Z0-9\s]/;
  const texto = document.getElementById('texto-a-encriptar').value;

  if (expresion.test(texto)) {
    return;
  }

  const newText = texto.toLowerCase().split('');

  for (let i = 0; i < newText.length; i += 1) {
    if (newText[i] === 'e') {
      newText[i] = 'enter';
    }
    if (newText[i] === 'i') {
      newText[i] = 'imes';
    }
    if (newText[i] === 'a') {
      newText[i] = 'ai';
    }
    if (newText[i] === 'o') {
      newText[i] = 'ober';
    }
    if (newText[i] === 'u') {
      newText[i] = 'ufat';
    }
  }
  document.getElementById('texto-encriptado').innerHTML = newText.join('');
}

encriptar();
