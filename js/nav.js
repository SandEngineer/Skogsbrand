function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/* nav hide on scroll */
var prevScrollpos = window.scrollY || window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.scrollY || window.pageYOffset;
  var navbar = document.getElementById("navbar-sm");
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top =
      "-100px"; /* Adjust the value to hide the navbar completely */
  }
  prevScrollpos = currentScrollPos;
};
