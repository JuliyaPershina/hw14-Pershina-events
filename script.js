const balloon = document.querySelector('.balloon');
balloon.style.fontSize = '40px';
// console.dir(balloon);
let size = 40;
// console.log(balloon.innerText);

function changeSizeUp() {
    balloon.style.fontSize = `${size + 10}px`;
  size += 10;
}
function changeSizeDown() {
    if (size > 40) {
        balloon.style.fontSize = `${size - 10}px`;
    size -= 10;
  }
}

const listenKey = function (e) {
    
    if (e.key == 'ArrowUp') {
      changeSizeUp();
    } else if (e.key == 'ArrowDown') {
      changeSizeDown();
    }
    if (size >= 100) {
        balloon.innerText = '💥';
      }
}

function changeBalloonSize(e) {
    window.addEventListener('keydown', (e) => {
        listenKey(e);
    });
    if (size >= 100) {
      window.removeEventListener('keydown', listenKey(e));
    }
}

changeBalloonSize();
console.log(size);

// function changeBalloonSize() {
//   window.addEventListener('keydown', (e) => {
//     if (e.key == 'ArrowUp') {
//       changeSizeUp();
//     } else if (e.key == 'ArrowDown') {
//       changeSizeDown();
//     }
//     if (size >= 100) {
//     balloon.innerText = '💥';
//   }
// });
// }