var names = ["gfjfdj", "gfjkghajkfjkhjkafh", "jhfladsh;glkhajgkh", "fjdlkagh8943y843nf", "dskjabfgkah", "dlsf;hg;ljh5475748", "fghkhsjkfhgkfshdjkghj", "fglhaghrjl;kahha", "gklagjlhalkjghkjahgl", "fdkgahkghakjhjk", "fldnglkjafhngakhg"];
var go = "no";
for (let index = 0; index < names.length; index++) {
    const element = window.sessionStorage.getItem(names[index]);
    if (element == "75577545458555" || element == "655646456465464" || element == "465454564654564654654" || element == "545465465456464464" || element == "56456456415346464") {  
        go = "yes"; 
        break;
    }
}
if (go != "yes") {
    window.location.href = "login.html";
}
