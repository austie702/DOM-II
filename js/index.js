// const pClick = (event) => { event.target.style.border = '5px solid red' };

const paragraph01 = document.querySelector('p');
paragraph01.addEventListener('click', (event) => {
  alert('You clicked the first paragarph');
});

const imageBanner = document.querySelector('img');
imageBanner.addEventListener('mouseover', (event) => {
  event.style.blur;
});

const targetImage = document.querySelector('img');
targetImage.addEventListener('dblclick', (event) => {
  alert('You double-clicked the map image');
});

const targetImage = document.querySelector('.container .home');
targetImage.addEventListener('drag', (event) => {
  alert('What a drag');
});

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('drop', (event) => {
//   alert('You double-clicked the map image');
// });

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('load', (event) => {
//   alert('You double-clicked the map image');
// });

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('focus', (event) => {
//   alert('You double-clicked the map image');
// });

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('resize', (event) => {
//   alert('You double-clicked the map image');
// });

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('scroll', (event) => {
//   alert('You double-clicked the map image');
// });

// const targetImage = document.querySelector('img');
// targetImage.addEventListener('select', (event) => {
//   alert('You double-clicked the map image');
// });
