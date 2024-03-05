let slider = document.getElementById("slider");

slider.oninput = function() {
  document.getElementById("paki").style.animationDuration = (1001 - this.value) + "ms";
}

function combine() {
  document.getElementById("result").innerHTML = "Uw volledige naam is: " + document.getElementById("first").value.charAt(0).toUpperCase() + document.getElementById("first").value.substring(1).toLowerCase() + " " + document.getElementById("last").value.charAt(0).toUpperCase() + document.getElementById("last").value.substring(1).toLowerCase();
}
