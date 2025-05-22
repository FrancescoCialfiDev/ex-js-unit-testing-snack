// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

const { getInitials, createSlug, avarage, createSlug2, isPalindrome, createSlug3, findPostById } = require("./varieFunzioni.js")

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Francesco", "Cialfi")).toBe("FC");
});

// Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Sono andato al mare")).toBe("SONO ANDATO AL MARE");
});

//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(avarage([1, 2, 3, 4, 5])).toBe(3)
})

//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug sostituisce gli spazi con -."
//📌 Esempi:
//createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug2("Sono andato al mare")).toBe("Sono-andato-al-mare")
})

//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("itopinonavevanonipoti")).toBe("itopinonavevanonipoti")
})

//Creare un test che verifichi la seguente descrizione:
//👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug3("")).toThrow()
})


//Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
//Creare un test che verifichi le seguenti descrizioni:
//👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
//Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

const posts = [
    { id: 1, title: "Cat", slug: "The cat is on the table" },
    { id: 2, title: "Dog", slug: "The dof is on the table" },
    { id: 3, title: "fish", slug: "The fish is in the aquarium" }
]

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Dog", slug: "The dof is on the table" })
})