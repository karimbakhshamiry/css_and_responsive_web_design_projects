document.querySelectorAll(".nav__link").forEach((element) => {
  if (element.textContent !== "Logout") {
    element.addEventListener("click", () => {
      document.querySelector(".visible").classList.remove("visible");
      console.log(element.dataset.id);
      document.getElementById(element.dataset.id).classList.add("visible");

      document.querySelector(".selected").classList.remove("selected");
      element.classList.add("selected");
    });
  }
});
