// /* Fungerade kod till SE.svg filen. */
/* Effekten som blir på hover/mouseEntered går att styla här i myStyles */

const myStyles = `
  filter: drop-shadow(0px 0px 10px rgb(239 239 239 / 1));
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  fill: rgb(239 239 239 / 0.1);


`;

const resetStyles = `
  filter: shadow(0px 0px 0px rgb(0 0 0 / 0));
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
`;

function loadMap() {
  var map = document.getElementById("map").contentDocument.querySelector("svg");
  var toolTip = document.getElementById("toolTip");

  // Add event listeners to map element
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // If user agent is not mobile add click listener (for wikidata links)
  }
  map.addEventListener("mousemove", mouseEntered, false);
  map.addEventListener("mouseout", mouseGone, false);

  // Show tooltip on mousemove
  //targetar cssText som skriver över css i "klumpar" istället för individuella styles - går t.ex. inte att skriva in saker med bindestreck efter "style. "
  function mouseEntered(e) {
    var target = e.target;
    if (target.classList.contains("hover")) {
      target.style.cssText = myStyles;

      var details = e.target.attributes;

      // Follow cursor
      toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

      // Tooltip data
      toolTip.innerHTML = `
        <ul>
            <li><b>${details.name.value}</b></li>
            <li>${details.info.value}</li>
        </ul>`;
    }
  }

  // Clear tooltip on mouseout
  function mouseGone(e) {
    var target = e.target;
    if (target.classList.contains("hover")) {
      target.style.cssText = resetStyles;
      toolTip.innerHTML = "";
    }
  }
}

// Calls init function on window load
window.onload = function () {
  loadMap();
};
