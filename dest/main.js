"use strict";
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  image1.style.display = "none";
  image2.style.display = "block";
});
