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

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
console.log("grid: ", grid);
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// For each item in the cardsArray array...
gameGrid.forEach(item => {
  // Create card element with the name dataset
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement('div');
  front.classList.add('front');

  // Create back of card, which contains
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1200;

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};
// Add event listener to grid
grid.addEventListener('click', function (event) {
  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) { return; }

  // Add selected class
  if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
      // If both guesses are not empty...
      if (firstGuess !== '' && secondGuess !== '') {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess) {
          // run the match function
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }
      // Set previous target to clicked
      previousTarget = clicked;
    }
 });

 // Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}
