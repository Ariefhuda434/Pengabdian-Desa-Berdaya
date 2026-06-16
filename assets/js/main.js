document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-week]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      });

      button.classList.remove("bg-white", "text-gray-700");
      button.classList.add("bg-primary", "text-white");

      galleryItems.forEach((item) => {
        const week = item.getAttribute("data-week");
        const shouldShow = selected === "semua" || selected === week;

        item.classList.toggle("hidden", !shouldShow);
      });
    });
  });
});