"use strict";

// Styling

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".overlay").classList.add("hidden");
    console.log("hidden");
  }, 2000); // 3000ms = 3 seconds
});
