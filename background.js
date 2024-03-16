function gra(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    var redb = document.getElementById('red');
    grab.style.display = 'none';
    darkb.style.display = 'block';
    lightb.style.display = 'none';
    redb.style.display = 'none';
    bodyElement.classList = [];
    bodyElement.classList.add("gra");
    window.sessionStorage.background = "gra";
}
function dark(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    var redb = document.getElementById('red');
    grab.style.display = 'none';
    darkb.style.display = 'none';
    lightb.style.display = 'block';
    redb.style.display = 'none';
    bodyElement.classList = [];
    bodyElement.classList.add("dark");
    window.sessionStorage.background = "dark";
}
function light(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    var redb = document.getElementById('red');
    grab.style.display = 'none';
    darkb.style.display = 'none';
    lightb.style.display = 'none';
    redb.style.display = 'block';
    bodyElement.classList = [];
    bodyElement.classList.add("light");
    window.sessionStorage.background = "light";
}
function red(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    var redb = document.getElementById('red');
    grab.style.display = 'block';
    darkb.style.display = 'none';
    lightb.style.display = 'none';
    redb.style.display = 'none';
    bodyElement.classList = [];
    bodyElement.classList.add("red");
    window.sessionStorage.background = "red";
}
if (window.sessionStorage.background == "gra"){
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "games.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        var redb = document.getElementById('red');
        grab.style.display = 'none';
        darkb.style.display = 'block';
        lightb.style.display = 'none';
        redb.style.display = 'none';
    }
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("gra");
}else if (window.sessionStorage.background == "light"){
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "games.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        var redb = document.getElementById('red');
        grab.style.display = 'none';
        darkb.style.display = 'none';
        lightb.style.display = 'none';
        redb.style.display = 'block';
    }
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("light");
}else if (window.sessionStorage.background == "dark"){
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "games.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        var redb = document.getElementById('red');
        grab.style.display = 'none';
        darkb.style.display = 'none';
        lightb.style.display = 'block';
        redb.style.display = 'none';
    }
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("dark");
}else if (window.sessionStorage.background == "red"){
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "games.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        var redb = document.getElementById('red');
        grab.style.display = 'block';
        darkb.style.display = 'none';
        lightb.style.display = 'none';
        redb.style.display = 'none';
    }
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("dark");
}else{
    var bodyElement = document.body;
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "games.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        grab.style.display = 'none';
        darkb.style.display = 'block';
        lightb.style.display = 'none';
    }
    bodyElement.classList.add("gra");
    window.sessionStorage.background = "gra";
}



// this script is allso in game_asete/game.js
