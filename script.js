let flg = 0;

function controller(x) {
  flg += x;
  slideshow(flg);
}

function slideshow(num) {
  let slides = document.querySelectorAll(".carousel-3-item");

  if (num > slides.length - 1) {
    flg = 0;
    num = 0;
  }

  if (num < 0) {
    num = slides.length - 1;
    flg = slides.length - 1;
  }
  for (i of slides) {
    i.style.display = "none";
  }

  slides[num].style.display = "block";
}

controller(0);

let flg1 = 0;
function controller1(x) {
  flg1 += x;
  slideshow1(flg);
}

function slideshow1(num) {
  let slides1 = document.querySelectorAll(".info-ias");

  if (num > slides1.length - 1) {
    flg1 = 0;
    num = 0;
  }

  if (num < 0) {
    num = slides1.length - 1;
    flg = slides1.length - 1;
  }
  for (i of slides1) {
    i.style.display = "none";
  }

  slides1[num].style.display = "block";
}

controller1(0);

let flg3 = 0;
function controller3(x) {
  flg3 += x;
  slideshow3(flg);
}

function slideshow3(num) {
  let slides = document.querySelectorAll(".carousel-1-item");

  if (num > slides.length - 1) {
    flg3 = 0;
    num = 0;
  }

  if (num < 0) {
    num = slides.length - 1;
    flg3 = slides.length - 1;
  }
  for (i of slides) {
    i.style.display = "none";
  }

  slides[num].style.display = "block";
}

controller3(0);
