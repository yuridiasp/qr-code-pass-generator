import permittedCharacters from "./utils/permitted-characteres.js";

async function handler() {
    const characters = await permittedCharacters()
    let password = ""
    const { PASSWORD_LENGTH } = process.env
    
    for (let i = 0; i < PASSWORD_LENGTH; i++) {
        const index = Math.floor(Math.random() * characters.length);
        
        password = password.concat(characters[index])
    }
    
    return password;
}

export default handler;