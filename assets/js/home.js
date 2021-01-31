/*console.clear();

window.onload = () => {
  const swiperConfig = {
    direction: 'vertical',
    mousewheel: true,
    mousewheelControl: true,
    loop: true,
    parallax: true,
    speed: 500
  };
  const divswipe = new Swiper('.swiper-container', swiperConfig);
}; */

// Toggle class on the topmost parent (body) to start all animations in one go
$("body").addClass("delayed-entrance-sequence");

$(".desc-text").addClass("invisible");

// Desc text rotation
var descs = [
  "360° Branding",
  "Corporate Film",
  "Digital Marketing",
  "Graphic Designing",
  "Photography",
  "Videography",
  "Web Designing"
]
var currentDescIndex = 0;
var descCssAnimationDelay = 500; // In milliseconds (Fixme: Value is duplicated from CSS)
function rotatingText() {
  $(".desc-text").text(descs[currentDescIndex]);
  $(".desc-text").addClass("rotating-text");
  setTimeout(function() {
    $(".desc-text").removeClass("rotating-text");
  }, descCssAnimationDelay+100);
  if (currentDescIndex == descs.length-1)
    currentDescIndex = 0;
  else
    currentDescIndex++;
  setTimeout(rotatingText, 2000); // Keep rotating
}

function simulateWindowOnLoad() {
  $("body").removeClass("delayed-entrance-sequence");
  setTimeout(function() {
    $(".desc-text").removeClass("invisible");
    rotatingText();
  }, 1500); // Would be better if we can retrieve the animation duration+delay value from the last hero-text letter (plus some delay if needed)
}

// Simulating window onload
setTimeout(simulateWindowOnLoad, 1000);

function replayAnimations() {
  $("body").addClass("delayed-entrance-sequence");
  setTimeout(function() {
    $("body").removeClass("delayed-entrance-sequence");
  }, 500)
}