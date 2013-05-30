  var eargasm_images = Array.prototype.slice.call(document.getElementsByClassName('eargasm-pic'));
  var timer;


  function fadeAllEargasm() {
    for(var i = 0; i <= (eargasm_images.length - 1); i+=1) {
      eargasm_images[i].style.opacity = 0;
    }
  }

  function fadeNextEargasm() {
    if (parseFloat(eargasm_images[0].style.opacity, 10) > 0) {
      eargasm_images[0].style.opacity = (eargasm_images[0].style.opacity*10 - 1)/10;
    }
    if (parseFloat(eargasm_images[1].style.opacity, 10) < 1) {
      eargasm_images[1].style.opacity = (eargasm_images[1].style.opacity*10 + 1)/10;
    }
  }

  function fadePreviousEargasm() {
    if (parseFloat(eargasm_images[0].style.opacity, 10) > 0) {
      eargasm_images[0].style.opacity = (eargasm_images[0].style.opacity*10 - 1)/10;
    }
    if (parseFloat(eargasm_images[(eargasm_images.length - 1)].style.opacity, 10) < 1) {
      eargasm_images[(eargasm_images.length - 1)].style.opacity = (eargasm_images[(eargasm_images.length - 1)].style.opacity*10 + 1)/10;
    }
  }

  function shiftImagesForwardEargasm() {
    shifted = eargasm_images.shift();
    eargasm_images.push(shifted);
  }

  function popImagesBackwardsEargasm() {
    popped = eargasm_images.pop();
    eargasm_images.unshift(popped);
  }

  function stopEargasm() {clearInterval(timer);}

  function nextEargasm() {
    timer = setInterval(fadeNextEargasm, 100);
    setTimeout(stopEargasm, 1100);
    setTimeout(shiftImagesForwardEargasm, 1101);
    setTimeout(stopEargasm, 1102);
  }

  function previousEargasm() {
    timer = setInterval(fadePreviousEargasm, 100);
    setTimeout(stopEargasm, 1100);
    setTimeout(popImagesBackwardsEargasm, 1101);
    setTimeout(stopEargasm, 1102);
  }

  fadeAllEargasm();
  eargasm_images[0].style.opacity = 1.0;
