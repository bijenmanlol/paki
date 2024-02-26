let slider = document.getElementById("slider");

slider.oninput = function() {
  document.getElementById("paki").style.animationDuration = (1001 - this.value) + "ms";
}