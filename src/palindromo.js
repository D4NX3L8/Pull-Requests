function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\s+/g, '');
  const invertido = limpio.split('').reverse().join('');
  return limpio === invertido;
}

// Pruebas
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false
