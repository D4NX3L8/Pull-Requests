function convertirARomano(numero) {
    // Validar que sea un número entero
    if (!Number.isInteger(numero)) {
        throw new Error("El valor ingresado debe ser un número entero.");
    }

    // Validar el rango permitido
    if (numero < 1 || numero > 3999) {
        throw new Error("El número debe estar entre 1 y 3999.");
    }

    const valoresRomanos = [
        { valor: 1000, simbolo: "M" },
        { valor: 900, simbolo: "CM" },
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" }
    ];

    let resultado = "";

    for (const item of valoresRomanos) {
        while (numero >= item.valor) {
            resultado += item.simbolo;
            numero -= item.valor;
        }
    }

    return resultado;
}


// Ejemplo
try {
    console.log(convertirARomano(1));    // I
    console.log(convertirARomano(58));   // LVIII
    console.log(convertirARomano(1994)); // MCMXCIV
    console.log(convertirARomano(3999)); // MMMCMXCIX
} catch (error) {
    console.error(error.message);
}