function passwordValidator(password) {
    //Debe tener al menos 16 caracteres.
    if (password.length < 16) {
        return false;
    }

    //Debe tener letras minúsculas y mayúsculas.
    if (!(password.toLowerCase() != password && password.toUpperCase() != password)) {
        return false;
    }

    //No puede tener 2 letras iguales consecutivas.
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i].toLowerCase() === password[i + 1].toLowerCase() && isNaN(password[i])) {
            return false;
        }
    }

    //Debe contener al menos 4 números.
    let count = 0;
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            count++;
        }
    }
    if (count < 4) {
        return false;
    }

    //No puede tener 2 números iguales consecutivos.
    for (let i = 0; i < password.length - 1; i++) {
        if (!isNaN(password[i]) && password[i] === password[i + 1]) {
            return false;
        }
    }

    //Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?)
    const specialChars = '!@#$%^&*-_=+?';
    count = 0;
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            count++;
        }
    }
    if (count < 2) {
        return false;
    }

    //No se puede usar el número 0.
    if (password.includes('0')) {
        return false;
    }

    //No se puede colocar espacios.
    if (password.includes(' ')) {
        return false;
    }

    // Todas las reglas pasaron.
    return true;
}


module.exports = {
    passwordValidator
}
