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
const containerBottom =
  mouseTrailContainer.getBoundingClientRect().top +
  mouseTrailContainer.getBoundingClientRect().height;
const containerLeft = mouseTrailContainer.getBoundingClientRect().left;
const containerRight =
  mouseTrailContainer.getBoundingClientRect().left +
  mouseTrailContainer.getBoundingClientRect().width;
const trails = document.querySelectorAll('.trail');
const trailCount = trails.length;

let index = 0;

document.addEventListener('mousemove', (event) => {
  const trailElement = trails[index];
  if (event.pageY >= containerTop && event.pageY < containerBottom) {
    trailElement.style.top = `${event.pageY}px`;
  } else if (event.pageY < containerTop) {
    trailElement.style.top = containerTop;
  } else {
    trailElement.style.top = containerBottom;
  }

  if (event.pageX >= containerLeft && event.pageX < containerRight) {
    trailElement.style.left = `${event.pageX}px`;
  } else if (event.pageX < containerLeft) {
    trailElement.style.left = containerLeft;
  } else {
    trailElement.style.left = containerRight;
  }

  index = (index + 1) % trailCount;
});
