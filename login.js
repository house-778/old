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
    names = ["sine", "poo", "moo", "login", "sineup", "jon", "jacson", "xander", "daniel", "adam", "sam", "harry", "nathan", "we", "ollieyt", "ollie", "jorden"];
    names[Math.random() * names.length + 1];

    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        window.sessionStorage.setItem(element, "")
        
    }
    window.sessionStorage.logedin = "yes"; 
    window.location.href = "index.html";
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
    window.sessionStorage.logedin = "yes"; 
    window.location.href = "index.html";
    //finsh();
 
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