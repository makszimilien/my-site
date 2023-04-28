"use strict";

// Styling

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".overlay").classList.add("hidden");
    console.log("hidden");
  }, 1800); // 3000ms = 3 seconds
});
