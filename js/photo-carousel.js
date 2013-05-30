var images = Array.prototype.slice.call(document.getElementsByTagName('img'));
var timer;


function fadeAll() {
  for(var i = 0; i <= (images.length - 1); i+=1) {
    images[i].style.opacity = 0;
  }
}

function fadeNext() {
  if (parseFloat(images[0].style.opacity, 10) > 0) {
    images[0].style.opacity = (images[0].style.opacity*10 - 1)/10;
  }
  if (parseFloat(images[1].style.opacity, 10) < 1) {
    images[1].style.opacity = (images[1].style.opacity*10 + 1)/10;
  }
}

function fadePrevious() {
  if (parseFloat(images[0].style.opacity, 10) > 0) {
    images[0].style.opacity = (images[0].style.opacity*10 - 1)/10;
  }
  if (parseFloat(images[(images.length - 1)].style.opacity, 10) < 1) {
    images[(images.length - 1)].style.opacity = (images[(images.length - 1)].style.opacity*10 + 1)/10;
  }
}

function shiftImagesForward() {
  shifted = images.shift();
  images.push(shifted);
}

function popImagesBacwards() {
  popped = images.pop();
  images.unshift(popped);
}

function stop() {clearInterval(timer);}

function next() {
  timer = setInterval(fadeNext, 100);
  setTimeout(stop, 1100);
  setTimeout(shiftImagesForward, 1101);
  setTimeout(stop, 1102);
}

function previous() {
  timer = setInterval(fadePrevious, 100);
  setTimeout(stop, 1100);
  setTimeout(popImagesBacwards, 1101);
  setTimeout(stop, 1102);
}

fadeAll();
images[0].style.opacity = 1.0;