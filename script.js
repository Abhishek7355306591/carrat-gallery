// Add active class to the current link
var currentLocation = location.href;
var navLinks = document.querySelectorAll('.navbar-nav a');
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentLocation) {
        navLinks[i].className += " active";
    }
}