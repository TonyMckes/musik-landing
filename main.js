import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#slider1", {
    gap: "2rem",
    type: "loop",
    focus: "center",
    isNavigation: true,
    autoplay: true,
    speed: 250,
    perPage: 3.5,
    breakpoints: {
      425: {
        perPage: 1,
        padding: "1rem",
      },
      768: {
        perPage: 2,
      },
    },
  }).mount();

  new Splide("#slider2", {
    gap: "2rem",
    type: "loop",
    focus: "center",
    isNavigation: true,
    autoplay: true,
    speed: 250,
    perPage: 2,
    breakpoints: {
      425: {
        perPage: 1,
        padding: "1rem",
      },
      768: {
        perPage: 1.5,
      },
    },
  }).mount();
  new Splide("#slider3", {
    gap: "2rem",
    type: "loop",
    focus: "center",
    isNavigation: true,
    autoplay: true,
    speed: 250,
    perPage: 5,
    breakpoints: {
      425: {
        perPage: 1,
      },
      768: {
        perPage: 3,
      },
    },
  }).mount();
});
