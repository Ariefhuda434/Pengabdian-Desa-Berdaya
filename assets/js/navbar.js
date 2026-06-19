document.addEventListener("DOMContentLoaded", () => {
  // Gallery filter
  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-week]");

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-filter");

        filterButtons.forEach((btn) => {
          btn.classList.remove("filter-active");
        });
        button.classList.add("filter-active");

        galleryItems.forEach((item) => {
          const week = item.getAttribute("data-week");
          const shouldShow = selected === "semua" || selected === week;
          if (shouldShow) {
            item.style.display = "";
            item.style.animation = "fadeUp 0.4s ease both";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});