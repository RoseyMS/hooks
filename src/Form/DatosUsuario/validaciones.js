
export const validarEmail = (email) => {
    const length = email.length
    if (length > 8 && length < 25 && email.includes('@')) {
        return true
    } else {
        return false
    }
}

export function validarPassword(password) {
    const length = password.length
    if (length >= 8 && length < 20) {
        console.log("valido")
        return true
    } else {
        return false
    }
}