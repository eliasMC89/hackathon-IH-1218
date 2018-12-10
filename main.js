'use strict';

let slideIndex = 0;

// Next/previous controls
function plusSlides (n) {
 showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide (n) {
 showSlides(slideIndex = n);
}

function showSlides () {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function start () {
  currentSlide(0); 
}

window.addEventListener('load', start);