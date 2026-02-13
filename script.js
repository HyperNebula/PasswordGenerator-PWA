function handleCopy() {
    const passwordCopy = document.getElementById('password-display').value;

    if (!passwordCopy) {
        return;
    }

    navigator.clipboard.writeText(passwordCopy).then(() => {
        //alert('Password copied to clipboard!');
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

let deferredEvent;
const installButton = document.getElementById("installButton");

window.addEventListener("beforeinstallprompt", (e) => {
    //e.preventDefault();
    deferredEvent = e;

    installButton.hidden = false;
});

function installPWA() {
    if (deferredEvent) {
        deferredEvent.prompt();
    }
}

window.addEventListener("appinstalled", () => {
    installButton.hidden = true;
    deferredEvent = null;
});