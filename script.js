const letter = document.getElementById("letter");
const letterScene = document.getElementById("letterScene");

letter.addEventListener("click", () => {
  letterScene.classList.remove("hidden");
  letterScene.scrollIntoView({ behavior: "smooth" });
});
