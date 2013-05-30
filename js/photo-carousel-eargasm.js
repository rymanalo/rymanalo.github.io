  var eargasm_images = Array.prototype.slice.call(document.getElementsByClassName('eargasm-pic'));
  var timer;


  function fadeAll() {
    for(var i = 0; i <= (eargasm_images.length - 1); i+=1) {
      eargasm_images[i].style.opacity = 0;
    }
  }

  function fadeNext() {
    if (parseFloat(eargasm_images[0].style.opacity, 10) > 0) {
      eargasm_images[0].style.opacity = (eargasm_images[0].style.opacity*10 - 1)/10;
    }
    if (parseFloat(eargasm_images[1].style.opacity, 10) < 1) {
      eargasm_images[1].style.opacity = (eargasm_images[1].style.opacity*10 + 1)/10;
    }
  }

  function fadePrevious() {
    if (parseFloat(eargasm_images[0].style.opacity, 10) > 0) {
      eargasm_images[0].style.opacity = (eargasm_images[0].style.opacity*10 - 1)/10;
    }
    if (parseFloat(eargasm_images[(eargasm_images.length - 1)].style.opacity, 10) < 1) {
      eargasm_images[(eargasm_images.length - 1)].style.opacity = (eargasm_images[(eargasm_images.length - 1)].style.opacity*10 + 1)/10;
    }
  }

  function shiftImagesForward() {
    shifted = eargasm_images.shift();
    eargasm_images.push(shifted);
  }

  function popImagesBacwards() {
    popped = eargasm_images.pop();
    eargasm_images.unshift(popped);
  }

  function stop() {clearInterval(timer);}

  function nextEargasm() {
    timer = setInterval(fadeNext, 100);
    setTimeout(stop, 1100);
    setTimeout(shiftImagesForward, 1101);
    setTimeout(stop, 1102);
  }

  function previousEargasm() {
    timer = setInterval(fadePrevious, 100);
    setTimeout(stop, 1100);
    setTimeout(popImagesBacwards, 1101);
    setTimeout(stop, 1102);
  }

  fadeAll();
  eargasm_images[0].style.opacity = 1.0;
