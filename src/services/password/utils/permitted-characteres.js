async function permittedCharacters() {
    const { UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS, SPECIAL_CHARACTERS } = process.env
    const permitted = []

    if (UPPERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (LOWERCASE_LETTERS === "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if (NUMBERS === "true") {
        permitted.push(..."0123456789")
    }

    if (SPECIAL_CHARACTERS === "true") {
        permitted.push(..."!@#$%&*()_-")
    }

    return permitted
}

export default permittedCharacters;