# Panduan Penggunaan & Integrasi Canva Website
## Portal MyPENTADBIRAN - SK Taman Permas Jaya 3

Portal ini telah dibina dengan fleksibiliti tinggi untuk digunakan sama ada sebagai **Laman Web Rasmi Mandiri (Standalone Web)** atau disepadukan ke dalam **Canva Website**.

---

### 📁 Struktur Fail Projek

| Fail / Folder | Penerangan |
| :--- | :--- |
| `index.html` | Laman web portal penuh (responsif, ada carian masa nyata, 12 kad modul, pautan pantas, kalendar takwim rasmi 2026 interaktif & modal tetapan dilindungi kata laluan pentadbir). |
| `takwim_data.js` | Pangkalan data takwim rasmi sekolah sepanjang tahun 2026 (450+ aktiviti merangkumi Pentadbiran, Kurikulum, HEM, Kokurikulum & Cuti/Khas diekstrak daripada Buku Pengurusan & Takwim). |
| `config.js` | Fail pusat tetapan pautan Google Drive, kata laluan pentadbir dan konfigurasi portal. |
| `canva_embed.html` | Versi mini/widget yang ringan khusus untuk di-embed ke dalam iframe Canva Website. |
| `icons/` | 29 ikon 3D rasmi yang telah diekstrak daripada `Oct 15 - 21_59 (1).zip`. |
| `assets/` | Gambar lencana sekolah (`school_logo.png`), sepanduk bangunan sekolah (`header_banner.jpg`), dan lakaran footer (`footer_banner.jpg`). |

---

### 🚀 Tiga Cara Penggunaan

#### Kaedah 1: Guna Terus Sebagai Laman Web Rasmi (Paling Disyorkan ⭐)
1. Buka fail `index.html` terus pada komputer anda dengan klik dua kali (*double-click*).
2. Laman web akan dibuka dalam pelayar web (Google Chrome / Microsoft Edge / Safari) dengan visual grafik penuh, kesan hover 3D, carian modul, kalendar, dan pautan terus ke fail Google Drive.
3. Anda boleh mengehoskan folder ini secara percuma di platform seperti:
   - **GitHub Pages**
   - **Vercel**
   - **Netlify**
   - **Google Sites** (menggunakan fungsi *Embed*)

#### Kaedah 2: Masukkan ke Canva Website (Embed App)
Jika anda membina laman web menggunakan Canva (*Canva Website*):
1. Hoskan `index.html` atau `canva_embed.html` di hosting percuma (cth: GitHub Pages atau Vercel).
2. Di dalam editor Canva:
   - Klik menu **Apps** di sebelah kiri.
   - Cari **Embed**.
   - Masukkan pautan URL laman web anda yang telah dihoskan.
3. Canva akan memaparkan portal interaktif ini di dalam halaman Canva Website anda secara langsung!

#### Kaedah 3: Reka Terus di Canva Menggunakan Aset Ikon
Jika anda ingin meletakkan elemen satu persatu di dalam Canva Canvas:
1. Muat naik fail gambar dari folder `icons/` terus ke Canva (cth: `School_Main_Committee_Icon...`, `Book_illustration...`, dll.).
2. Klik pada imej ikon di Canva.
3. Klik ikon tiga titik (`...`) -> **Link (Pautan)**.
4. Masukkan URL Google Drive masing-masing (lihat senarai di bawah).
5. Apabila anda klik **Publish Website** di Canva, setiap ikon boleh diklik dan akan membawa guru terus ke dokumen Google Drive!

---

### 🔗 Pemetaan Pautan Google Drive Rasmi

Folder Induk Google Drive:
👉 [DASHBOARD PENTADBIRAN (Folder Penuh)](https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing)

| No. | Modul | Fail Sasaran di Google Drive | Pautan Langsung |
| :---: | :--- | :--- | :--- |
| **01** | JAWATANKUASA & ORGANISASI | Surat Lantikan Pentadbiran 2026 | [Buka Fail](https://drive.google.com/file/d/1y5M2LL9kZRtVOamElYj02GRENIkkg2cD/view?usp=sharing) |
| **02** | BUKU PENGURUSAN SEKOLAH | Gabung Buku Pengurusan SKTPJ3 2026 | [Buka Fail](https://drive.google.com/file/d/1pKg41zhfS5M7iR33sVI5qFlGNxKeZ_mv/view?usp=sharing) |
| **03** | HALA TUJU SEKOLAH | Slaid / Infografik Hala Tuju | [Buka Fail](https://drive.google.com/file/d/1Siz-rV5l5xhyUQDMBll1RHU6V2vIwsIk/view?usp=sharing) |
| **04** | PERANCANGAN STRATEGIK | _RPS 2026.pdf | [Buka Fail](https://drive.google.com/file/d/1XfCJvubsnQsyl4DVNIyq_NESQPTiwXCr/view?usp=sharing) |
| **05** | MINIT MESYUARAT | Minit Mesyuarat Pentadbiran Bil 1 | [Buka Fail](https://drive.google.com/file/d/1SIegvXZ91zrQCDkoO0P2samNXZOd6QVU/view?usp=sharing) |
| **06** | TAKWIM & JADUAL | Aktiviti & Program Bulanan 2026 | [Buka Fail](https://drive.google.com/file/d/1qruPhKxFOhcpBVjwq9CdKfdSq75iiAw-/view?usp=sharing) |
| **07** | SURAT & PEKELILING | Surat Panggilan Mesyuarat 2026 | [Buka Fail](https://drive.google.com/file/d/1dEXtBaudupI-mNzhxNxwbdfxKs4NUxrw/view?usp=sharing) |
| **08** | PEMANTAUAN & PENILAIAN | Folder Induk Pemantauan | [Buka Folder](https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing) |
| **09** | DATA & ANALISIS | Profil & Analisis Sekolah | [Buka Fail](https://drive.google.com/file/d/1cT5SAO3gVo7YHGOMM1JzwSQ02XO2orx4/view?usp=sharing) |
| **10** | PROGRAM & TINDAKAN | Laporan & Kertas Kerja Aktiviti | [Buka Fail](https://drive.google.com/file/d/1jnhu_HGSfWy4vEnflgPLsJ1bn3cIGJN5/view?usp=sharing) |
| **11** | PENGURUSAN FAIL & DOKUMENTASI | Indeks & Templat Fail | [Buka Folder](https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing) |
| **12** | ARKIB & AMALAN BAIK | Amalan Baik SKTPJ3 | [Buka Fail](https://drive.google.com/file/d/1dCuZ8_0BLRm-ts2F8MTH3eHUOMoO_XlV/view?usp=sharing) |

---

### ⚙️ Cara Menukar Pautan & Akses Pentadbir (Admin Password)

1. **Melalui Pelayar Web (Paling Mudah)**:
   - Buka `index.html`.
   - Klik ikon **Gear (Tetapan)** di bucu atas kanan bar navigasi.
   - Masukkan kata laluan pentadbir. Kata laluan lalai: **`admin123`**.
   - Tampal (*paste*) URL Google Drive yang baharu untuk mana-mana modul (atau tukar kata laluan pentadbir baharu jika mahu).
   - Klik **Simpan Pautan**. Portal akan terus menggunakan URL baharu tersebut secara automatik!
2. **Melalui Kod Sumber**:
   - Buka fail `config.js` dengan mana-mana teks editor (Notepad / VS Code).
   - Tukar nilai `url` atau `adminPassword` dan simpan fail.
