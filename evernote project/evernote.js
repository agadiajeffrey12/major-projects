console.log("hello");
let whyEvernote = document.getElementById('why-evernote');
let greenLine = document.getElementById('greenline');
let features = document.getElementById('features')
let line = document.getElementById('line')
let dropDown = document.getElementById('dropdown')
let up = document.getElementById('up')
let down = document.getElementById('down')
let plans = document.getElementById('plans')
let green = document.getElementById('green')
let loops = document.getElementById('loops')
let boops = document.getElementById('boops')
let dropping = document.getElementById('dropping')
console.log(whyEvernote, greenLine);

whyEvernote.addEventListener('mouseenter', function(){
    greenLine.style.display = "block";
})


whyEvernote.addEventListener('mouseleave', function(){
    greenLine.style.display = "none";
})

features.addEventListener('mouseenter', function(){
    line.style.display = "block"
    dropDown.style.display ='block'
    up.style.display = "none"
    down.style.display = "block"
    dropping.style.display = "none"
    features.style.color = "#00a82d"
})

features.addEventListener('mouseleave', function(){

   
})

dropDown.addEventListener('mouseleave', function(){
    dropDown.style.display ='none'
    up.style.display = "block"
    down.style.display = "none"
    line.style.display = "none"
    features.style.color = "#000"
})

plans.addEventListener('mouseenter', function(){
    green.style.display= "block"
    loops.style.display= "none"
    boops.style.display= "block"
    dropping.style.display= "block"
    dropDown.style.display = "none"
    plans.style.color = "#00a82d"
})

dropping.addEventListener('mouseleave', function(){
    green.style.display= "none"
    loops.style.display= "block"
    boops.style.display= "none"
    dropping.style.display= "none"
    plans.style.color = "#000"
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 5000);
 }