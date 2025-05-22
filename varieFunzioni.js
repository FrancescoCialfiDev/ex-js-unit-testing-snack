function getInitials(nome, cognome) {
    return nome.charAt(0) + cognome.charAt(0)
}
function createSlug(str) {
    return str.toUpperCase()
}
function avarage(arrNumbers) {
    const avarage = arrNumbers.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    return avarage / arrNumbers.length
}
function createSlug2(str) {
    return str.replaceAll(" ", "-")
}
function isPalindrome(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed

}
function createSlug3(title) {
    if (!title.trim()) {
        throw new Error("Il titolo non può essere vuoto");
    }
}
function findPostById(posts, id) {
    if (posts.every((post) => post.title && post.id && post.slug) && typeof (id) === "number") {
        return posts.find(post => post.id === id)
    }
}





module.exports = { getInitials, createSlug, avarage, createSlug2, isPalindrome, createSlug3, findPostById }