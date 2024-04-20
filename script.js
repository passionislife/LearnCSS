let nav = document.querySelector("nav");
let img = document.querySelector("img");
let svg = document.getElementById("fill");
let dl = document.getElementById("btn");
let foot = document.getElementById("foot");
let test_0 = document.getElementById("test_0");
let test_1 = document.getElementById("test_1");
let test_2 = document.getElementById("test_2");
let test_3 = document.getElementById("test_3");
let test_4 = document.getElementById("test_4");
let test_5 = document.getElementById("test_5");
dl.style.border = "1px solid #dee2e6";
dl.onclick = () => {
  let temp = nav.getAttribute("data-bs-theme");
  if (temp == "dark") {
    nav.setAttribute("data-bs-theme", "light");
    img.setAttribute("src", "Image/dark.png");
    svg.setAttribute("src", "Image/brightness-high-fill.svg");
    document.body.style.backgroundColor = "white";
    foot.setAttribute(
      "class",
      "w-100 py-4 flex-shrink-0 text-black bg-light border-top rounded-top"
    );
    test_0.setAttribute("class", "card text-center text-bg-light mb-2");
    test_1.setAttribute("class", "card text-center text-bg-light mb-2");
    test_2.setAttribute("class", "card text-center text-bg-light mb-2");
    test_3.setAttribute("class", "card text-center text-bg-light mb-2");
    test_4.setAttribute("class", "card text-center text-bg-light mb-2");
    test_5.setAttribute("class", "card text-center text-bg-light mb-2");
  }
  if (temp == "light") {
    nav.setAttribute("data-bs-theme", "dark");
    img.setAttribute("src", "Image/light.png");
    svg.setAttribute("src", "Image/brightness-high.svg");
    dl.style.border = "1px solid #dee2e6";
    document.body.style.backgroundColor = "#ededed";
    foot.setAttribute(
      "class",
      "w-100 py-4 flex-shrink-0 text-white bg-dark border-top rounded-top"
    );
    test_0.setAttribute("class", "card text-center text-bg-dark mb-2");
    test_1.setAttribute("class", "card text-center text-bg-dark mb-2");
    test_2.setAttribute("class", "card text-center text-bg-dark mb-2");
    test_3.setAttribute("class", "card text-center text-bg-dark mb-2");
    test_4.setAttribute("class", "card text-center text-bg-dark mb-2");
    test_5.setAttribute("class", "card text-center text-bg-dark mb-2");
  }
};
