import '../scss/pages/about.scss';
import ScrollMagic from 'scrollmagic';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();
 
    // Create a scene
    new ScrollMagic.Scene({
        triggerElement: "#trigger", // element that triggers the animation
        triggerHook: "onEnter", // when the element reaches the top of the viewport
        duration: 300 // how long the animation should last
    })
    .on('leave', function () {
        var animateMe = document.querySelector("#animate-me");
        if (animateMe) {
            animateMe.classList.add("animate-in");
        }
    })
    .on('enter', function () {
        var animateMe = document.querySelector("#animate-me");
        if (animateMe) {
            animateMe.classList.remove("animate-in");
        }
    })
    .addTo(controller); // add scene to controller
});