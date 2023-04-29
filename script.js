"use strict";

// Styling

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".overlay").classList.add("hidden");
  }, 1800); // 3000ms = 3 seconds
});

// add even listener to element that has the class class="arrow-down" and when clicked, run the function
// document
//   .querySelectorAll(".arrow-down")
//   .split(",")
//   .map((element) =>
//     element.addEventListener("click", function () {
//       console.log(this.classList);
//     })
//   );
// console.log(typeof document.querySelectorAll(".arrow-down"));
// document.querySelectorAll(".arrow-down").map((element) => {
//   console.log(element.parentElement);
// });
