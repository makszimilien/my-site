"use strict";

// Styling

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".overlay").classList.add("hidden");
  }, 1000); // 3000ms = 3 seconds
});

document.querySelectorAll(".arrow-down, .arrow-up").forEach((element) =>
  element.addEventListener("click", function () {
    // console.log(this.parentElement.classList.value, this.classList.value);
    const currentPage = Number(
      this.parentNode.parentNode.parentNode.getAttribute("id").match(/\d+/)[0]
    );
    console.log(currentPage);
    this.classList.value === "arrow-down"
      ? document
          .querySelector(`#page-${currentPage + 1}`)
          .scrollIntoView({ behavior: "smooth" })
      : document
          .querySelector(`#page-${currentPage - 1}`)
          .scrollIntoView({ behavior: "smooth" });
  })
);
