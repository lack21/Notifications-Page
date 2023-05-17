// lear
// Notifications Page

window.addEventListener("DOMContentLoaded", () => {
  const activeItems = document.querySelectorAll(".item.active");
  const markButton = document.querySelector(".mark");
  const count = document.querySelector(".count");

  markButton.addEventListener("click", () => {
    activeItems.forEach((item) => item.classList.remove("active"));
    count.innerHTML = document.querySelectorAll(".item.active").length;
  });

  activeItems.forEach((item) =>
    item.addEventListener("click", () => {
      item.classList.remove("active");
      count.innerHTML = document.querySelectorAll(".item.active").length;
    })
  );
});
