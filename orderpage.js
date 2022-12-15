const button1 = document.getElementById("cardbutton");
const button2 = document.getElementById("completebutton");

button2.style.display = "none";

button1.addEventListener("click", function () {
  button2.style.display = "inline-block";
});
