const alfabet = 'abcdefghijklmnopqrstuvwxyz';
const inputField = document.getElementById('message');
const btn = document.getElementById('btnEncrypt');
btn.addEventListener('click', doEncrypt)
const encryptedText = document.getElementById('encrypted');
const encryptedTable = document.getElementById('encryptedTable');
const shiftkey = 3;

function doEncrypt() {
    console.log('doEncrypt');
    console.log(inputField.value);

    let message = inputField.value;
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        let letter = message[i].toLowerCase();
        let pos = alfabet.indexOf(letter);
        if (pos === -1) {
            encryptedMessage += message[i];
        } else {
            let newPos = (pos + shiftkey) % alfabet.length;
            let newLetter = alfabet[newPos];
            encryptedMessage += newLetter;
        }
    }
    
    let rowHTML = '<tr></td>' + message + '</td><td>' + encryptedMessage + '</td></tr>';
    encryptedTable.innerHTML += rowHTML;    
    console.log('Encrypted message: ' + encryptedMessage);
}