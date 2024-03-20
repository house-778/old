function hash(str) {
    let hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return hash;
}
function finsh(){
    var names = ["sine", "poo", "moo", "login", "sineup", "jon", "jacson", "xander", "daniel", "adam", "sam", "harry", "nathan", "we", "ollieyt", "ollie", "jorden"];
    var chosenIndex = Math.floor(Math.random() * names.length); 
    var chosenName = names[chosenIndex]; 

    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if(element === chosenName){ 
            window.sessionStorage.setItem(element, "75577545458555");
        } else {
            var fras = ["1039690785", "564561432645614564", "584658456456496", "56845646454+6746", "4564645646464364564", "LAQ6"];
            var randomIndex = Math.floor(Math.random() * fras.length);
            window.sessionStorage.setItem(element, fras[randomIndex]); 
        }
    }
}

const correctCom = ['0', '0', '7', '6', '1']; 
let userin = []; 
var count = 0; 
document.addEventListener("keydown", function(event) { 
  const keyp = event.key; 
  if (keyp === "Backspace") { 
    userin.pop(); 
  } else if (keyp === "ArrowRight" || /^[a-zA-Z0-9]$/.test(keyp)) { 
    userin.push(keyp); 
  } 
  if (JSON.stringify(userin) === JSON.stringify(correctCom)) { 
    userin = []; 
    finsh();
    window.location.href = "index.html";
 
  } else{ 
    count = userin.length; 
    if (count == 1){ 
        document.getElementById('pass').innerText = ""; 
        let dots = ''; 
        for (let i = 0; i < count; i++) { 
        dots += '.'; 
        } 
        document.getElementById('pass').innerText = dots; 
    }else if (count == 0){ 
        document.getElementById('pass').innerText = "Password..."; 
    } else{ 
        let dots = ''; 
        for (let i = 0; i < count; i++) { 
        dots += '.'; 
        } 
        document.getElementById('pass').innerText = dots; 
    } 
  } 

}); 
