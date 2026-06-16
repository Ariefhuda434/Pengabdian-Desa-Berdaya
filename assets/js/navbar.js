class AppNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute("active") || "home";

    const menuItems = [
      { key: "home", label: "Home", href: "index.html" },
      { key: "tentang", label: "Tentang Kami", href: "tentang.html" },
      { key: "program", label: "Program", href: "program.html" },
      { key: "galeri", label: "Galeri", href: "galeri.html" },
      { key: "blog", label: "Blog", href: "blog.html" },
      { key: "kontak", label: "Kontak", href: "kontak.html" },
    ];

    const desktopMenu = menuItems
      .map((item) => {
        const isActive = active === item.key;

        return `
          <a 
            href="${item.href}" 
            class="${isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"} relative transition-colors duration-200"
          >
            ${item.label}
            ${isActive ? '<span class="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary"></span>' : ""}
          </a>
        `;
      })
      .join("");

    const mobileMenu = menuItems
      .map((item) => {
        const isActive = active === item.key;

        return `
          <a 
            href="${item.href}" 
            class="${isActive ? "bg-primary-50 text-primary font-semibold" : "text-gray-700 hover:bg-primary-50 hover:text-primary"} block rounded-xl px-4 py-3 text-sm transition-colors duration-200"
          >
            ${item.label}
          </a>
        `;
      })
      .join("");

    this.innerHTML = `
      <header class="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
        <nav class="container-custom flex items-center justify-between px-6 py-4">
          <a href="index.html" class="flex items-center gap-3" aria-label="Kembali ke halaman utama">
            <img
              src="assets/img/logo/logo-desa-berdaya.png"
              alt="Logo Tim Pengmas Desa Berdaya"
              class="h-11 w-11 rounded-2xl object-cover ring-1 ring-gray-200"
              onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden')"
            >
            <span class="hidden h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">DB</span>

            <div>
              <p class="text-base font-extrabold leading-tight text-gray-950">
                Desa Berdaya
              </p>
              <p class="text-xs font-medium text-gray-500">
                Pengmas USU 2025
              </p>
            </div>
          </a>

          <div class="hidden items-center gap-7 text-sm font-medium md:flex">
            ${desktopMenu}
          </div>

          <a
            href="kontak.html"
            class="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-800 md:inline-flex"
          >
            Hubungi Kami
          </a>

          <button
            type="button"
            id="navbar-toggle"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 md:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded="false"
          >
            <svg id="navbar-open-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg id="navbar-close-icon" xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        <div id="mobile-menu" class="hidden border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div class="space-y-1">
            ${mobileMenu}
          </div>
          <a
            href="kontak.html"
            class="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-800"
          >
            Hubungi Kami
          </a>
        </div>
      </header>
    `;

    const toggleButton = this.querySelector("#navbar-toggle");
    const mobileMenuElement = this.querySelector("#mobile-menu");
    const openIcon = this.querySelector("#navbar-open-icon");
    const closeIcon = this.querySelector("#navbar-close-icon");

    toggleButton.addEventListener("click", () => {
      const isHidden = mobileMenuElement.classList.toggle("hidden");
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      toggleButton.setAttribute("aria-expanded", String(!isHidden));
    });
  }
}

customElements.define("app-navbar", AppNavbar);