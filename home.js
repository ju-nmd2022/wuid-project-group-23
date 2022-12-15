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
