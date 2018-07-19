// Card data
const cardsArray = [{
    'name': 'bmo',
    'img': 'img/BMO.png',
  },
  {
    'name': 'candy',
    'img': 'img/candy.png',
  },
  {
    'name': 'finn',
    'img': 'img/finn.png',
  },
  {
    'name': 'flame-princess',
    'img': 'img/flame-princess.png',
  },
  {
    'name': 'gunther',
    'img': 'img/gunther.png',
  },
  {
    'name': 'ice-king',
    'img': 'img/ice-king.png',
  },
  {
    'name': 'jake',
    'img': 'img/jake.png',
  },
  {
    'name': 'lsp',
    'img': 'img/lsp.png',
  },
  {
    'name': 'marceline',
    'img': 'img/marceline.png',
  },
  {
    'name': 'p-bubblegum',
    'img': 'img/p-bubblegum2.png',
  },
  {
    'name': 'peppermint-butler',
    'img': 'img/peppermint-butler.png',
  },
  {
    'name': 'lady-rainicorn',
    'img': 'img/lady-rainicorn.png',
  },
];

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
console.log("grid: ", grid);
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
cardsArray.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});
