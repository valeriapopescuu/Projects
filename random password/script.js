const passwordBox=document.getElementById("password")
const lenght=12


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase ="abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbols="@#$%^&*()_+[]|/=-><~?!"

const allChars = upperCase + lowerCase + number + symbols


function createPassword(){
    let password=""
    password +=upperCase[Math.floor(Math.random()*upperCase.length)]
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password +=number[Math.floor(Math.random()*number.length)]
    password +=symbols[Math.floor(Math.random()*symbols.length)]

    while(lenght > password.length){
      password+= allChars[Math.floor(Math.random()*symbols.length)]
    }
    passwordBox.value=password


}

function copyPassword(){
    passwordBox.select();//selecteaza tot din campul de introducere a parolei
    document.execCommand("copy");
} //sau var mai moderna 
function copyPassword() {
    passwordBox.select();

    try {
        document.execCommand("copy");
        alert("Parolă copiată în clipboard!");
    } catch (err) {
        console.error("Eroare la copierea parolei în clipboard:", err);
        alert("Eroare la copierea parolei în clipboard. Vă rugăm să încercați manual.");
    }

    // Deselectează textul după copiere
    window.getSelection().removeAllRanges();
}
