const balloon = document.querySelector('.balloon');

balloon.style.fontSize = '40px';

let size = 40;

function changeSizeUp() {
  balloon.style.fontSize = `${size + 10}px`;
  size += 10;
  checkExplosion();
}
function changeSizeDown() {
  if (size > 40) {
    balloon.style.fontSize = `${size - 10}px`;
    size -= 10;
  }
}

function listenKey(e) {
  if (e.key === 'ArrowUp') {
    changeSizeUp();
  } else if (e.key === 'ArrowDown') {
    changeSizeDown();
  }
  e.preventDefault(); // Prevent page scrolling
}

function checkExplosion() {
  if (size >= 100) {
    balloon.innerText = '💥';
    window.removeEventListener('keydown', listenKey); // Remove event listener properly
  }
}

window.addEventListener('keydown', listenKey);


// ---------- Mouse trail ------------------------------

const mouseTrailContainer = document.querySelector('.mouseTrailContainer');
const containerTop = mouseTrailContainer.getBoundingClientRect().top;
const containerLeft = mouseTrailContainer.getBoundingClientRect().left;
const trails = document.querySelectorAll('.trail');
const trailCount = trails.length

let index = 0; // Cycling through elements in order

document.addEventListener('mousemove', (event) => {
  const trailElement = trails[index];

  // Move current element to mouse position
  trailElement.style.left = `${event.pageX}px`;
  trailElement.style.top = `${event.pageY}px`;

  index = (index + 1) % trailCount; // Cycle through elements to maintain trail effect
});


//   document.addEventListener('mousemove', (e) => {
//   trail[0].style.left = `${e.pageX}px`;
//   trail[0].style.top = `${e.pageY}px`;
//   for (let i = 1; i < trail.length; i++) {
//     const element = trail[i];

//     element.style.left = trail[i - 1].style.left;
//     element.style.top = trail[i - 1].style.top;
//     console.log(trail[i - 1].style.left);
//   }
// });

