// script.js
function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) + 3); // Décalage de 3 caractères
    }
    return result;
}

// Mot de passe chiffré (éventuellement obtenu par un appel serveur)
const encryptedPassword = encrypt('OMCHR6HUE'); // À remplacer par une méthode de récupération sécurisée

function showPasswordForm() {
    document.getElementById('passwordForm').style.display = 'block';
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const decryptedPassword = decrypt(encryptedPassword);

    if (password === decryptedPassword) {
        window.location.href = 'https://example.com/download'; // Remplacez par votre lien
    } else {
        alert('Mot de passe incorrect. Veuillez essayer à nouveau.');
    }
}

function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) - 3); // Décalage de -3 caractères
    }
    return result;
}
