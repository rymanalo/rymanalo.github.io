var eargasm_goodfood_images = Array.prototype.slice.call(document.getElementsByClassName('goodfood-pic'));
var timer;


function fadeAll() {
  for(var i = 0; i <= (eargasm_goodfood_images.length - 1); i+=1) {
    eargasm_goodfood_images[i].style.opacity = 0;
  }
}

function fadeNext() {
  if (parseFloat(eargasm_goodfood_images[0].style.opacity, 10) > 0) {
    eargasm_goodfood_images[0].style.opacity = (eargasm_goodfood_images[0].style.opacity*10 - 1)/10;
  }
  if (parseFloat(eargasm_goodfood_images[1].style.opacity, 10) < 1) {
    eargasm_goodfood_images[1].style.opacity = (eargasm_goodfood_images[1].style.opacity*10 + 1)/10;
  }
}

function fadePrevious() {
  if (parseFloat(eargasm_goodfood_images[0].style.opacity, 10) > 0) {
    eargasm_goodfood_images[0].style.opacity = (eargasm_goodfood_images[0].style.opacity*10 - 1)/10;
  }
  if (parseFloat(eargasm_goodfood_images[(eargasm_goodfood_images.length - 1)].style.opacity, 10) < 1) {
    eargasm_goodfood_images[(eargasm_goodfood_images.length - 1)].style.opacity = (eargasm_goodfood_images[(eargasm_goodfood_images.length - 1)].style.opacity*10 + 1)/10;
  }
}

function shiftImagesForward() {
  shifted = eargasm_goodfood_images.shift();
  eargasm_goodfood_images.push(shifted);
}

function popImagesBacwards() {
  popped = eargasm_goodfood_images.pop();
  eargasm_goodfood_images.unshift(popped);
}

function stop() {clearInterval(timer);}

function nextGoodfood() {
  timer = setInterval(fadeNext, 100);
  setTimeout(stop, 1100);
  setTimeout(shiftImagesForward, 1101);
  setTimeout(stop, 1102);
}

function previousGoodfood() {
  timer = setInterval(fadePrevious, 100);
  setTimeout(stop, 1100);
  setTimeout(popImagesBacwards, 1101);
  setTimeout(stop, 1102);
}

fadeAll();
eargasm_goodfood_images[0].style.opacity = 1.0;
