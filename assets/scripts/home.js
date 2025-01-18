document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu-id");
  const mainNav = document.getElementById("main-nav-menu");
  const mainContent = document.getElementById("main");
  const body = document.body;

  // Обработчик клика для переключения меню
  burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mainNav.classList.toggle("active");

      if (mainNav.classList.contains("active")) {
          mainContent.classList.add("shifted");
          body.style.overflowX = "hidden";
      } else {
          mainContent.classList.remove("shifted");
          body.style.overflowX = "";
      }
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (e) => {
      if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
          burgerMenu.classList.remove("active");
          mainNav.classList.remove("active");
          mainContent.classList.remove("shifted");
          body.style.overflowX = "";
      }
  });
});
