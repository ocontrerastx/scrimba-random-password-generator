const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let messageEl = document.getElementById("message");

function generatePassword() {
    let passwordArray = []
    let password = ""
    messageEl.textContent = ""

    for (e = 0; e < 2; e++) {
        for (i = 0; i < 15; i++) {  
            password += characters[Math.floor(Math.random() * characters.length)]
        } 
        passwordArray.push(password)
        password = ""
    }

    firstPasswordEl.textContent = passwordArray[0]
    secondPasswordEl.textContent = passwordArray[1]
}

async function saveToClipboard(passwordField) {

    let messageField = ""
    let message = "copied to clipboard"

        if (passwordField === 'first-password') {
            passwordField = firstPasswordEl
            messageField = "First password "
        } else { 
            passwordField = secondPasswordEl
            messageField = "Second password "
        }
    
        try {
            await navigator.clipboard.writeText(passwordField.textContent);
          } catch (err) {
            console.error(err.name, err.message);
          }
        
        messageEl.textContent = messageField + message;
    
}



