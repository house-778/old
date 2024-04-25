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
// this script is in game_a.js to below
function go_to_page(url){
  var html = `
<!DOCTYPE html>
<script src="chech.js"></script>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href = "game_a.css">
  <title>House - Game</title>
</head>
<body>
<div id = "url"  class = "hidden">
  ${url}
</div>
<style>
.hidden{
  display: none;
}
</style>
<div class="Bside">
  <a href="#home" class="home"><span onclick="home()"><span class="material-symbols-outlined">home</span>Home</span></a>
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
  <script src="game_a.js"></script>
  <script src="stop.js"></script>
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
// this script is in game_a.js to above

window.addEventListener('load', () => sortButtonsAlphabetically());
function getStoredURLs() {
  const storedURLs = localStorage.getItem('visitedPages');
  return storedURLs ? JSON.parse(storedURLs) : [];
}
function getCleanButtonText(url) {
  var cleen = url.split('/').pop().replace(/[-]/g, ' ').replace('_new.html', '');
  if(cleen == ""){
    cleen = "snow rider";
  }
  return cleen
}
function createButtons() {
  const urls = getStoredURLs();
  const container = document.getElementById('visitedPages');
  urls.forEach(url => {
    const button = document.createElement('button');
    button.textContent = getCleanButtonText(url);
    button.setAttribute('onclick', "go_to_page('"+url+"')");
    container.append(button);
  });
}
window.onload = createButtons;


function games(){
  url = [
      'https://778gs.github.io/10-minutes-till-dawn',
'https://778gs.github.io/11-11',
'https://778gs.github.io/12-minibattles',
'https://778gs.github.io/1v1.xml',
'https://778gs.github.io/2048-multitask',
'https://778gs.github.io/2048',
'https://778gs.github.io/3d-car-simulator',
'https://778gs.github.io/3d-moto-simulator-2',
'https://778gs.github.io/4th-and-goal-2022',
'https://778gs.github.io/4x4-drive-offroad',
'https://778gs.github.io/8-ball-pool',
'https://778gs.github.io/a-dance-of-fire-and-ice',
'https://778gs.github.io/a-small-world-cup',
'https://778gs.github.io/adventure-drivers',
'https://778gs.github.io/age-of-war',
'https://778gs.github.io/air-hockey-championship-deluxe',
'https://778gs.github.io/among-us',
'https://778gs.github.io/ape-sling',
'https://778gs.github.io/aqua-thrills',
'https://778gs.github.io/archery-world-tour',
'https://778gs.github.io/arithmetica',
'https://778gs.github.io/athletics-hero',
'https://778gs.github.io/awesome-tanks-2',
'https://778gs.github.io/awesome-tanks',
'https://778gs.github.io/b-cubed',
'https://778gs.github.io/basket-and-ball',
'https://778gs.github.io/basket-bros',
'https://778gs.github.io/basket-champs',
'https://778gs.github.io/basket-random',
'https://778gs.github.io/basket-swooshes',
'https://778gs.github.io/basketball-legends',
'https://778gs.github.io/basketball-line',
'https://778gs.github.io/basketball-stars',
'https://778gs.github.io/battle-wheels',
'https://778gs.github.io/bearsus',
'https://778gs.github.io/big-shot-boxing',
'https://778gs.github.io/big-tall-small',
'https://778gs.github.io/bike-trials-offroad-1',
'https://778gs.github.io/bike-trials-winter-1',
'https://778gs.github.io/bike-trials-winter-2',
'https://778gs.github.io/bitlife',
'https://778gs.github.io/block-the-pig',
'https://778gs.github.io/blocky-cars',
'https://778gs.github.io/blocky-trials',
'https://778gs.github.io/bloons-tower-defense-1',
'https://778gs.github.io/bloxorz',
'https://778gs.github.io/blumgi-ball',
'https://778gs.github.io/blumgi-castle',
'https://778gs.github.io/blumgi-rocket',
'https://778gs.github.io/blumgi-slime',
'https://778gs.github.io/bob-the-robber-4',
'https://778gs.github.io/bomb-it-7',
'https://778gs.github.io/bowling-stars',
'https://778gs.github.io/boxing-physics-2',
'https://778gs.github.io/boxing-random',
'https://778gs.github.io/brain-for-monster-truck',
'https://778gs.github.io/brain-test-2-tricky-stories',
'https://778gs.github.io/brain-test-3-tricky-quests',
'https://778gs.github.io/brain-test-tricky-puzzles',
'https://778gs.github.io/breaking-the-bank',
'https://778gs.github.io/bubble-shooter',
'https://778gs.github.io/bubble-trouble-3',
'https://778gs.github.io/bubble-trouble',
'https://778gs.github.io/bullet-force',
'https://778gs.github.io/bumper-cars-soccer',
'https://778gs.github.io/bunny-hop',
'https://778gs.github.io/burger-bounty',
'https://778gs.github.io/burnin-rubber-5-xs',
'https://778gs.github.io/burnin-rubber-crash-n-burn',
'https://778gs.github.io/burnout-drift-seaport-max',
'https://778gs.github.io/burrito-bison',
'https://778gs.github.io/candy-jump',
'https://778gs.github.io/cannon-strike',
'https://778gs.github.io/car-climb-racing',
'https://778gs.github.io/car-rush',
'https://778gs.github.io/cars-thief-tank-edition',
'https://778gs.github.io/cars-thief',
'https://778gs.github.io/cat-gunner-super-zombie-shoot',
'https://778gs.github.io/cat-trap',
'https://778gs.github.io/cats',
'https://778gs.github.io/chicken-merge',
'https://778gs.github.io/chrome-dino',
'https://778gs.github.io/city-bike-stunt-2',
'https://778gs.github.io/city-car-driving-stunt-master',
'https://778gs.github.io/city-rider',
'https://778gs.github.io/cluster-rush',
'https://778gs.github.io/coffee-shop',
'https://778gs.github.io/color-switch',
'https://778gs.github.io/color-tunnel-2',
'https://778gs.github.io/cookie-clicker',
'https://778gs.github.io/crazy-cars',
'https://778gs.github.io/crazy-tunnel-3d',
'https://778gs.github.io/cricket-world-cup',
'https://778gs.github.io/crossy-road',
'https://778gs.github.io/cubes-king',
'https://778gs.github.io/cubito-mayhem',
'https://778gs.github.io/curve-ball-3d',
'https://778gs.github.io/cyber-cars-punk-racing',
'https://778gs.github.io/death-chase',
'https://778gs.github.io/death-run-3d',
'https://778gs.github.io/deepest-sword',
'https://778gs.github.io/deer-simulator',
'https://778gs.github.io/demolition-derby-crash-racing',
'https://778gs.github.io/detective-loupe-puzzle',
'https://778gs.github.io/dinosaur-game',
'https://778gs.github.io/dog-simulator-3d',
'https://778gs.github.io/doge-miner',
'https://778gs.github.io/doodle-champion-island',
'https://778gs.github.io/doodle-jump',
'https://778gs.github.io/draw-the-hill',
'https://778gs.github.io/dreadhead-parkour',
'https://778gs.github.io/drift-boss',
'https://778gs.github.io/drift-hunters',
'https://778gs.github.io/drive-mad',
'https://778gs.github.io/drunken-duel',
'https://778gs.github.io/duck-life-2-world-champion',
'https://778gs.github.io/duck-life-3-evolution',
'https://778gs.github.io/duck-life-4',
'https://778gs.github.io/duck-life',
'https://778gs.github.io/dunkbrush',
'https://778gs.github.io/dunkers',
'https://778gs.github.io/earn-to-die',
'https://778gs.github.io/eggy-car',
'https://778gs.github.io/elastic-man',
'https://778gs.github.io/electron-dash',
'https://778gs.github.io/eliza-mall-mania',
'https://778gs.github.io/energy',
'https://778gs.github.io/escaping-the-prison',
'https://778gs.github.io/eugenes-life',
'https://778gs.github.io/evo-city-driving',
'https://778gs.github.io/extreme-car-driving-simulator',
'https://778gs.github.io/extreme-car-parking',
'https://778gs.github.io/factory-balls-forever',
'https://778gs.github.io/fairy-dressup',
'https://778gs.github.io/fancy-pants-2',
'https://778gs.github.io/fancy-pants-3',
'https://778gs.github.io/fancy-pants',
'https://778gs.github.io/five-nights-at-freddys-2',
'https://778gs.github.io/five-nights-at-freddys-3',
'https://778gs.github.io/five-nights-at-freddys',
'https://778gs.github.io/flappy-bird-origin',
'https://778gs.github.io/flappy-bird',
'https://778gs.github.io/fleeing-the-complex',
'https://778gs.github.io/flying-car-simulator',
'https://778gs.github.io/foot-chinko',
'https://778gs.github.io/football-legends',
'https://778gs.github.io/football-masters',
'https://778gs.github.io/fortz',
'https://778gs.github.io/free-kick-shooter',
'https://778gs.github.io/free-the-key',
'https://778gs.github.io/funny-shooter-2',
'https://778gs.github.io/furious-racing-3d',
'https://778gs.github.io/g-switch-3',
'https://778gs.github.io/geometry-dash',
'https://778gs.github.io/getaway-shootout',
'https://778gs.github.io/go-kart-go-ultra',
'https://778gs.github.io/gobble',
'https://778gs.github.io/gold-digger-frvr',
'https://778gs.github.io/golf-champions',
'https://778gs.github.io/golfinity',
'https://778gs.github.io/google-feud',
'https://778gs.github.io/google-snake',
'https://778gs.github.io/grand-prix-hero',
'https://778gs.github.io/gravity-soccer',
'https://778gs.github.io/grindcraft-remastered',
'https://778gs.github.io/grindcraft',
'https://778gs.github.io/gun-mayhem-2',
'https://778gs.github.io/gun-mayhem-3',
'https://778gs.github.io/gun-mayhem',
'https://778gs.github.io/gunspin',
'https://778gs.github.io/hammer-2-reloaded',
'https://778gs.github.io/happy-room',
'https://778gs.github.io/head-soccer-2023',
'https://778gs.github.io/heads-arena-soccer-all-stars',
'https://778gs.github.io/heart-star-html5',
'https://778gs.github.io/hextris',
'https://778gs.github.io/highway-racer-3d',
'https://778gs.github.io/highway-rider-extreme',
'https://778gs.github.io/highway-traffic',
'https://778gs.github.io/horse-shoeing',
'https://778gs.github.io/horse-simulator-3d',
'https://778gs.github.io/house-of-hazards',
'https://778gs.github.io/hover-racer-drive',
'https://778gs.github.io/hover-racer',
'https://778gs.github.io/icy-purple-head-3',
'https://778gs.github.io/idle-ants',
'https://778gs.github.io/idle-breakout',
'https://778gs.github.io/idle-digging-tycoon',
'https://778gs.github.io/idle-lumber-inc',
'https://778gs.github.io/idle-miner',
'https://778gs.github.io/idle-mining-empire',
'https://778gs.github.io/idle-startup-tycoon',
'https://778gs.github.io/impossible-monster-truck-race',
'https://778gs.github.io/impossible-tic-tac-toe',
'https://778gs.github.io/infinity-loop',
'https://778gs.github.io/iron-snout',
'https://778gs.github.io/jelly-truck',
'https://778gs.github.io/jet-boy',
'https://778gs.github.io/jetpack-joyride',
'https://778gs.github.io/jollyworld',
'https://778gs.github.io/jumping-shell',
'https://778gs.github.io/kart-race-3d',
'https://778gs.github.io/kawaii-dressup',
'https://778gs.github.io/kix-dream-soccer',
'https://778gs.github.io/leader-strike',
'https://778gs.github.io/life-the-game',
'https://778gs.github.io/lemonade-stand',
'https://778gs.github.io/linebacker-alley-2',
'https://778gs.github.io/ludo-multiplayer',
'https://778gs.github.io/mad-day',
'https://778gs.github.io/mad-truck-challenge-special',
'https://778gs.github.io/madalin-stunt-cars-2',
'https://778gs.github.io/marble-dash',
'https://778gs.github.io/madalin-stunt-cars-3',
'https://778gs.github.io/masked-forces',
'https://778gs.github.io/master-chess',
'https://778gs.github.io/maze-path-of-light',
'https://778gs.github.io/merge-cakes',
'https://778gs.github.io/maze-planet-3d',
'https://778gs.github.io/merge-cyber-racers',
'https://778gs.github.io/merge-harvest',
'https://778gs.github.io/minecraft-1.5.2',
'https://778gs.github.io/minecraft-1.8.8',
'https://778gs.github.io/merge-round-racers',
'https://778gs.github.io/minecraft-builder',
'https://778gs.github.io/minesweeper',
'https://778gs.github.io/minibattles',
'https://778gs.github.io/mob-city',
'https://778gs.github.io/monkey-mart',
'https://778gs.github.io/monster-tracks',
'https://778gs.github.io/monsters-wheels-special',
'https://778gs.github.io/mosaic-puzzle-art',
'https://778gs.github.io/moto-maniac-2',
'https://778gs.github.io/moto-maniac',
'https://778gs.github.io/moto-road-rash-3d',
'https://778gs.github.io/moto-x3m-2',
'https://778gs.github.io/moto-x3m-spooky-land',
'https://778gs.github.io/moto-x3m-pool-party',
'https://778gs.github.io/moto-x3m-winter',
'https://778gs.github.io/moto-x3m',
'https://778gs.github.io/murder',
'https://778gs.github.io/moto-trial-racing-2',
'https://778gs.github.io/neon-war',
'https://778gs.github.io/n-gon',
'https://778gs.github.io/noob-drive',
'https://778gs.github.io/onion-boy',
'https://778gs.github.io/orbital-survival',
'https://778gs.github.io/offroader-v5',
'https://778gs.github.io/ovo',
'https://778gs.github.io/panda-bubble-shooter',
'https://778gs.github.io/paper-fighter-3d',
'https://778gs.github.io/parking-fury-2',
'https://778gs.github.io/parking-fury-3d-bounty-hunter',
'https://778gs.github.io/parking-fury-3d-night-thief',
'https://778gs.github.io/penalty-kick-online',
'https://778gs.github.io/penalty-shooters-2',
'https://778gs.github.io/ping-pong-html5',
'https://778gs.github.io/pixwars-2',
'https://778gs.github.io/perfect-peel',
'https://778gs.github.io/pixel-gun-survival',
'https://778gs.github.io/plactions',
'https://778gs.github.io/poor-bunny',
'https://778gs.github.io/pop-it-master',
'https://778gs.github.io/power-badminton',
'https://778gs.github.io/pre-civilization-bronze-age',
'https://778gs.github.io/pool-club',
'https://778gs.github.io/my-pony-my-little-race',
'https://778gs.github.io/panda-simulator-3d',
'https://778gs.github.io/precision-client',
'https://778gs.github.io/paper-io-2',
'https://778gs.github.io/parking-fury',
'https://778gs.github.io/puppet-master',
'https://778gs.github.io/rabbit-samurai',
'https://778gs.github.io/raft-wars-2',
'https://778gs.github.io/raft-wars-multiplayer',
'https://778gs.github.io/raft-wars',
'https://778gs.github.io/rally-champion',
'https://778gs.github.io/real-cars-in-city',
'https://778gs.github.io/real-city-driving-2',
'https://778gs.github.io/real-simulator-monster-truck',
'https://778gs.github.io/red-ball-4',
'https://778gs.github.io/recoil',
'https://778gs.github.io/riddle-school',
'https://778gs.github.io/retro-bowl',
'https://778gs.github.io/rio-rex',
'https://778gs.github.io/parkour-block-3d',
'https://778gs.github.io/rocket-pult',
'https://778gs.github.io/rocket-soccer-derby',
'https://778gs.github.io/rolling-sky',
'https://778gs.github.io/rolly-vortex',
'https://778gs.github.io/roly-poly-monsters',
'https://778gs.github.io/rooftop-snipers-2',
'https://778gs.github.io/rooftop-snipers',
'https://778gs.github.io/rowdy-wrestling',
'https://778gs.github.io/run-3-editor',
'https://778gs.github.io/running-fred',
'https://778gs.github.io/rusher-crusher',
'https://778gs.github.io/sausage-flip',
'https://778gs.github.io/school-bus-demolition-derby',
'https://778gs.github.io/rowdy-city-wrestling',
'https://778gs.github.io/scrap-metal',
'https://778gs.github.io/shoot-stickman',
'https://778gs.github.io/short-life',
'https://778gs.github.io/short-ride',
'https://778gs.github.io/sketchbook-04',
'https://778gs.github.io/shortcut-race',
'https://778gs.github.io/skiing-fred',
'https://778gs.github.io/slime-road',
'https://778gs.github.io/slope-2-multiplayer',
'https://778gs.github.io/slope-2',
'https://778gs.github.io/slope-3',
'https://778gs.github.io/slope-city',
'https://778gs.github.io/slope',
'https://778gs.github.io/smash-karts',
'https://778gs.github.io/soccar',
'https://778gs.github.io/soccer-random',
'https://778gs.github.io/soccer-skills-champions-league',
'https://778gs.github.io/soccer-skills-euro-cup',
'https://778gs.github.io/solitaire',
'https://778gs.github.io/soccer-skills-world-cup',
'https://778gs.github.io/speed-boat-extreme-racing',
'https://778gs.github.io/squish-run',
'https://778gs.github.io/sniper-gun-shooting',
'https://778gs.github.io/snow-rider-3d',
'https://778gs.github.io/stack-ball',
'https://778gs.github.io/stack-bump-3d',
'https://778gs.github.io/stacktris',
'https://778gs.github.io/stack',
'https://778gs.github.io/stair-race-3d',
'https://778gs.github.io/stealing-the-diamond',
'https://778gs.github.io/stick-defenders',
'https://778gs.github.io/stick-fighter',
'https://778gs.github.io/stick-merge',
'https://778gs.github.io/stickman-army-team-battle',
'https://778gs.github.io/stickman-army-the-resistance',
'https://778gs.github.io/stickman-bike-pr',
'https://778gs.github.io/stickman-bike',
'https://778gs.github.io/stickman-boxing-ko-champion',
'https://778gs.github.io/stickman-bridge-constructor',
'https://778gs.github.io/stickman-climb-2',
'https://778gs.github.io/stickman-fighter-epic-battle-2',
'https://778gs.github.io/stickman-fighter-mega-brawl',
'https://778gs.github.io/stickman-golf',
'https://778gs.github.io/stickman-hook',
'https://778gs.github.io/stickman-ragdoll-crash-fun',
'https://778gs.github.io/stickman-school-run',
'https://778gs.github.io/stock-car-hero',
'https://778gs.github.io/street-ball-jam',
'https://778gs.github.io/striker-dummies',
'https://778gs.github.io/stunt-car-challenge-3',
'https://778gs.github.io/stupid-zombies',
'https://778gs.github.io/subway-runner',
'https://778gs.github.io/subway-surfers-beijing',
'https://778gs.github.io/subway-surfers-houston',
'https://778gs.github.io/subway-surfers-monaco',
'https://778gs.github.io/subway-surfers-newyork',
'https://778gs.github.io/subway-surfers-san-francisco',
'https://778gs.github.io/super-bike-the-champion',
'https://778gs.github.io/super-hexbee-merger',
'https://778gs.github.io/super-hot',
'https://778gs.github.io/super-liquid-soccer',
'https://778gs.github.io/super-mario-64',
'https://778gs.github.io/super-mario-bros',
'https://778gs.github.io/super-racing-gt-drag-pro',
'https://778gs.github.io/super-santa-kicker',
'https://778gs.github.io/super-star-car',
'https://778gs.github.io/super-tunnel-rush',
'https://778gs.github.io/superbattle-2',
'https://778gs.github.io/survivor-in-rainbow-monster',
'https://778gs.github.io/superbike-hero',
'https://778gs.github.io/swatforce-vs-terrorists',
'https://778gs.github.io/swingo',
'https://778gs.github.io/tag',
'https://778gs.github.io/tank-trouble-2',
'https://778gs.github.io/tanuki-sunset',
'https://778gs.github.io/temple-of-boom',
'https://778gs.github.io/temple-run-2',
'https://778gs.github.io/terris',
'https://778gs.github.io/tetris-flash',
'https://778gs.github.io/tennis-masters',
'https://778gs.github.io/the-impossible-quiz',
'https://778gs.github.io/the-little-giant',
'https://778gs.github.io/there-is-no-game',
'https://778gs.github.io/the-spear-stickman',
'https://778gs.github.io/three-goblets',
'https://778gs.github.io/thumb-fighter-christmas',
'https://778gs.github.io/thumb-fighter',
'https://778gs.github.io/tictactoe',
'https://778gs.github.io/tiger-simulator-3d',
'https://778gs.github.io/tiny-fishing',
'https://778gs.github.io/tinytownracing',
'https://778gs.github.io/tomb-of-the-mask-color',
'https://778gs.github.io/tomb-of-the-mask',
'https://778gs.github.io/toon-off',
'https://778gs.github.io/top-speed-3d',
'https://778gs.github.io/top-speed-racing-3d',
'https://778gs.github.io/tower-of-destiny',
'https://778gs.github.io/traffic-mania',
'https://778gs.github.io/traffic-rider',
'https://778gs.github.io/tricks',
'https://778gs.github.io/truck-traffic',
'https://778gs.github.io/tube-jumpers',
'https://778gs.github.io/tunnel-rush',
'https://778gs.github.io/turbo-moto-racer',
'https://778gs.github.io/two-ball-3d-dark',
'https://778gs.github.io/two-neon-boxes',
'https://778gs.github.io/ultimate-car-driving',
'https://778gs.github.io/unicycle-hero',
'https://778gs.github.io/vex-4',
'https://778gs.github.io/vex-6',
'https://778gs.github.io/vex-5',
'https://778gs.github.io/vex-7',
'https://778gs.github.io/volley-random',
'https://778gs.github.io/volleyball-challenge',
'https://778gs.github.io/water-color-sort',
'https://778gs.github.io/we-become-what-we-behold',
'https://778gs.github.io/where-is-my-cat',
'https://778gs.github.io/who-is',
'https://778gs.github.io/wizard-mike',
'https://778gs.github.io/wood-blocks-3d',
'https://778gs.github.io/word-city-crossed',
'https://778gs.github.io/word-city-uncrossed',
'https://778gs.github.io/wordle-unlimited',
'https://778gs.github.io/words-search-classic-edition',
'https://778gs.github.io/worlds-hardest-game-2',
'https://778gs.github.io/worlds-hardest-game-3',
'https://778gs.github.io/wrassling',
'https://778gs.github.io/zombie-derby-pixel-survival',

  ]
  return url
}
var place = document.getElementById("game_button");
for (let i = 0; i < url.length; i++) {
  const element = array[i];
  var buttonText = element.substring(element.lastIndexOf('/') + 1).replace(/-/g, '');
  var button = document.createElement('button');
  button.id = i
  button.textContent = buttonText;
  button.onclick = `go_to_page(${element})`
  place.appendChild(button)
}
sortButtonsAlphabetically()





