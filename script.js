function handleCopy() {
    navigator.clipboard.writeText(document.getElementById('password-display').value).then(() => {
        alert('Password copied to clipboard!');
    });
}
