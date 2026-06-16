# Website Pengmas Desa Berdaya

Website static dokumentasi Pengabdian Masyarakat Tim "Desa Berdaya" - Program Studi Kesehatan Masyarakat, Universitas Sumatera Utara.

## Struktur

```text
pengmas-desa-berdaya/
├── index.html
├── tentang.html
├── program.html
├── galeri.html
├── blog.html
├── kontak.html
├── src/input.css
├── assets/css/output.css
├── assets/js/navbar.js
├── assets/js/footer.js
├── assets/js/main.js
└── assets/img/
```

## Cara Install Tailwind

```bash
npm install
```

## Jalankan Tailwind Watch

```bash
npm run dev
```

Biarkan terminal ini tetap hidup selama mengedit file.

## Jalankan Local Server

Buka terminal baru, lalu jalankan:

```bash
npm run serve
```

Buka browser:

```text
http://localhost:5500
```

## Build CSS Final

```bash
npm run build
```

## Cara Ganti Gambar

Ganti file gambar sesuai path berikut:

```text
assets/img/logo/logo-desa-berdaya.png
assets/img/hero/hero-kegiatan.jpg
assets/img/tim/anggota-1.jpg
assets/img/tim/anggota-2.jpg
...
assets/img/tim/anggota-8.jpg
assets/img/tim/dosen-pembimbing.jpg
assets/img/galeri/minggu-1/kegiatan-1.jpg
assets/img/galeri/minggu-1/kegiatan-2.jpg
...
```

## Edit Navbar

Edit file:

```text
assets/js/navbar.js
```

## Edit Footer

Edit file:

```text
assets/js/footer.js
```

## Edit Kontak

Edit file:

```text
kontak.html
```

Ganti nomor WhatsApp pada bagian:

```html
<a href="https://wa.me/6280000000000">
```

Format WhatsApp harus memakai kode negara Indonesia:

```text
628xxxxxxxxxx
```
