class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-primary-900 text-white">
        <div class="container-custom px-6 py-12">
          <div class="grid gap-10 md:grid-cols-4">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Logo_Universitas_Sumatera_Utara.svg"
                  alt="Logo Universitas Sumatera Utara"
                  class="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/20"
                >
                <div>
                  <p class="font-extrabold">Tim Pengmas “Desa Berdaya”</p>
                  <p class="text-sm text-green-100">Kesehatan Masyarakat — Universitas Sumatera Utara</p>
                </div>
              </div>

              <p class="mt-5 max-w-xl text-sm leading-7 text-green-50">
                Website dokumentasi kegiatan pengabdian masyarakat di Desa Patumbak, Deli Serdang, sebagai media publikasi, arsip kegiatan, dan lampiran laporan akhir.
              </p>
            </div>

            <div>
              <h3 class="font-bold">Navigasi</h3>
              <div class="mt-4 space-y-3 text-sm text-green-100">
                <a class="block hover:text-white" href="tentang.html">Tentang Kami</a>
                <a class="block hover:text-white" href="program.html">Program Kegiatan</a>
                <a class="block hover:text-white" href="galeri.html">Galeri</a>
                <a class="block hover:text-white" href="blog.html">Blog/Update</a>
              </div>
            </div>

            <div>
              <h3 class="font-bold">Informasi</h3>
              <div class="mt-4 space-y-3 text-sm text-green-100">
                <p>Desa Patumbak, Deli Serdang</p>
                <p>Juli – Agustus 2026</p>
                <p>8 Anggota Tim</p>
                <p>Dosen Pembimbing: Dr. Rina Hasibuan, M.Kes</p>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6 text-center text-sm text-green-100">
            © 2026 Tim Pengmas Desa Berdaya. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);