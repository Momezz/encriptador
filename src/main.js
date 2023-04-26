document.getElementById('encrypt').addEventListener('click', () => {
  const text = document.getElementById('text-to-encrypt').value;
  const expression = /[^a-zA-Z0-9\s]/;
  if (expression.test(text)) {
    return;
  }
  const newText = text.toLowerCase().split('');
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
  document.getElementById('encrypted-text').innerHTML = newText.join('');
});

document.getElementById('decrypt').addEventListener('click', () => {
  let text = document.getElementById('text-to-encrypt').value;
  if (text !== '') {
    let newText = text.replace(/enter/g, 'e');
    text = newText.replace(/imes/g, 'i');
    newText = text.replace(/ai/g, 'a');
    text = newText.replace(/ober/g, 'o');
    newText = text.replace(/ufat/g, 'u');
    document.getElementById('encrypted-text').innerHTML = newText;
  }
});

document.getElementById('clean').addEventListener('click', () => {
  if (document.getElementById('text-to-encrypt').value !== '') {
    document.getElementById('text-to-encrypt').value = '';
  }
});

document.getElementById('copy-text').addEventListener('click', () => {
  const text = document.getElementById('encrypted-text').innerHTML;
  if (text !== '') {
    navigator.clipboard.writeText(text).then(() => {
    }, () => {
      console.error('Error al copiar texto');
    });
  }
});
