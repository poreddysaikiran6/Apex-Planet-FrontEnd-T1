const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
  alert("👋 Welcome to My Webpage! Thanks for clicking!");
});

const colorButton = document.getElementById('colorButton');
const bodyElement = document.body;

const backgroundColors = [
  '#f0f8ff',
  '#faebd7',
  '#e6e6fa',
  '#f5f5dc',
  '#fffacd',
  '#d8bfd8',
  '#add8e6',
  '#90ee90',
  '#ffb6c1',
];

colorButton.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  const randomColor = backgroundColors[randomIndex];
  bodyElement.style.backgroundColor = randomColor;
});
