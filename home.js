const menu = document.getElementById("menulogo");
const dropdown = document.getElementById("dropdownmenu");

dropdown.style.display = "none";

menu.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

window.onscroll = function () {
  scrollRotate();  
};

function scrollRotate() {
  let image = document.getElementById("foodhomepage");
  image.style.transform = "rotate(" + window.scrollY/50 + "deg) translateX(" + window.scrollY/100 + "rem)";
}