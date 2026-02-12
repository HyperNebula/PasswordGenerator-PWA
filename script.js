function handleCopy() {
    navigator.clipboard.writeText(document.getElementById('password-display').value).then(() => {
        alert('Password copied to clipboard!');
    });
}

function generatePassword() {
    const length = 24;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*()_+':;?,./-";

    let password = "";

    const indexValues = new Uint8Array(length);
    window.crypto.getRandomValues(indexValues);
    
    for (let i = 0; i < length; i++) {
        password += charset[indexValues[i] % charset.length];
    }

    document.getElementById('password-display').value = password;
}
