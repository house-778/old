function sortButtonsAlphabetically() {
  const buttonsContainer = document.getElementById('buttonsContainer');
  const buttons = Array.from(buttonsContainer.querySelectorAll('.game_button'));

  buttons.sort((a, b) => a.textContent.localeCompare(b.textContent, undefined, { sensitivity: 'base' }));

  buttons.forEach(button => buttonsContainer.appendChild(button));
}
function deleatGameY(){
  const storedURLs = localStorage.getItem('visitedPages');
  localStorage.removeItem('visitedPages');
  document.getElementById("visitedPages").innerHTML = "";
  createButtons()
}

function searchGames() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const buttons = document.querySelectorAll(".game_button");

  buttons.forEach(button => {
    const txtValue = button.innerText || button.textContent;
    button.style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
  });

  sortButtonsAlphabetically();
}
function go_to_page(url){
  var html = `
<!DOCTYPE html>
<script src="chech.js"></script>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href = "/game_asets/game.css">
  <title>House - Game</title>
</head>
<body>
<div class="Bside">
  <a href="#home" class="home"><span onclick="home()" class="material-symbols-outlined">home</span>Home</a>
  <a href="#Search" class="qac"><span onclick="openq()"><span class="material-symbols-outlined">search</span>Search</span> </a>
</div>

  <div id="Quickaccess" class="Qaccess">
    <a href="javascript:void(0)" class="closebtn" onclick="closeq()">&times;</a>
    <h2>Search</h2>
    <input type="search" id="search" placeholder="Search" oninput="performSearch()">
    <br>
    <div id="searchResults"></div>
  </div>
  <iframe style="width: 100%; height: 100vh;"  class="game-iframe" id="game-area" src="${url}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>
  <script src="/game_asets/game.js"></script>
  <script>
    function home(){
      window.location.reload();
    }
  </script>
</body>
</html>
  `;
  document.open();
  document.write(html);
  document.close();

}

window.addEventListener('load', () => sortButtonsAlphabetically());
function getStoredURLs() {
  const storedURLs = localStorage.getItem('visitedPages');
  return storedURLs ? JSON.parse(storedURLs) : [];
}
function getCleanButtonText(url) {
  return url.split('/').pop().replace(/[-]/g, ' ').replace('_new.html', '');
}
function createButtons() {
  const urls = getStoredURLs();
  const container = document.getElementById('visitedPages');
  urls.forEach(url => {
    const button = document.createElement('button');
    button.textContent = getCleanButtonText(url);
    button.setAttribute('onclick', "window.loaction.href = '"+url+"'");
    container.append(button);
  });
}
window.onload = createButtons;


