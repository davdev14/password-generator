const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
function getRandomPassword(){
  let pass = ""
  let pass2 = ""
  for (i = 0; i <= 14; i++){
    let password1 = characters[Math.floor(Math.random() * characters.length)]
    let password2 = characters[Math.floor(Math.random() * characters.length)]
    pass += password1
    pass2 += password2
    passwordEl1.textContent = pass
    passwordEl2.textContent = pass2
  }
}

