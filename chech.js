var names = ["gfjfdj", "gfjkghajkfjkhjkafh", "jhfladsh;glkhajgkh", "fjdlkagh8943y843nf", "dskjabfgkah", "dlsf;hg;ljh5475748", "fghkhsjkfhgkfshdjkghj", "fglhaghrjl;kahha", "gklagjlhalkjghkjahgl", "fdkgahkghakjhjk", "fldnglkjafhngakhg"];
var go = "no";
for (let index = 0; index < names.length; index++) {
    const element = window.sessionStorage.getItem(names[index]);
    if (element == "75577545458555") {  
        go = "yes"; 
        break;
    }
}
if (go != "yes") {
    window.location.href = "login.html";
}

