// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

const { getInitials } = require("./varieFunzioni.js")

test("Passato un nome completo, deve restituire le iniziali del nome e cognome", () => {
    expect(getInitials("Francesco", "Cialfi")).toBe("FC");
});

// Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug restituisce una stringa in lowercase."