/**
 * Konfigurasi Utama Portal MyPENTADBIRAN - SK TAMAN PERMAS JAYA 3
 * Boleh diubah suai pada bila-bila masa atau melalui butang Tetapan di laman web.
 */
const DEFAULT_PORTAL_CONFIG = {
  version: "2026.10.21",
  schoolName: "SK TAMAN PERMAS JAYA 3",
  schoolCode: "JBA1092",
  tagline: "Kerja Sepasukan Pacu Kecemerlangan",
  subTagline: "Satu pusat rujukan digital bagi pengurusan sekolah yang sistematik, teratur dan berkesan.",
  portalTitle: "MyPENTADBIRAN",
  portalSubtitle: "PORTAL PENGURUSAN SEKOLAH",
  mainDriveFolder: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing",
  adminPassword: "admin123",
  
  // 5 Teras Nilai
  values: [
    { title: "MUDAH DIAKSES", icon: "fa-solid fa-arrow-pointer", bg: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "DOKUMEN TERSUSUN", icon: "fa-solid fa-folder-open", bg: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "MAKLUMAT TERKINI", icon: "fa-solid fa-bullhorn", bg: "bg-rose-50 text-rose-700 border-rose-200" },
    { title: "KERJA BERSEPASUKAN", icon: "fa-solid fa-users", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { title: "KE ARAH KECEMERLANGAN", icon: "fa-solid fa-chart-line", bg: "bg-teal-50 text-teal-700 border-teal-200" }
  ],

  // 12 Modul Utama Pentadbiran
  modules: [
    {
      id: "01",
      title: "JAWATANKUASA & ORGANISASI",
      desc: "Carta organisasi, jawatankuasa dan bidang tugas",
      icon: "icons/modul_01_jawatankuasa.jpg",
      url: "https://drive.google.com/drive/folders/1Kn252cuWJPUSbvdRjazFUkg4j72uP7zz?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
      cardBorder: "hover:border-purple-500",
      glowColor: "group-hover:shadow-purple-500/20"
    },
    {
      id: "02",
      title: "BUKU PENGURUSAN SEKOLAH",
      desc: "Buku pengurusan, maklumat dan profil sekolah",
      icon: "icons/modul_02_buku_pengurusan.jpg",
      url: "https://drive.google.com/drive/folders/1PE0pLRxQ1Ye2BvmFHDT-xPSsrChQs_nx?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-blue-600 to-cyan-600",
      cardBorder: "hover:border-blue-500",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      id: "03",
      title: "HALA TUJU SEKOLAH",
      desc: "Visi, misi, matlamat dan sasaran",
      icon: "icons/modul_03_hala_tuju.jpg",
      url: "https://drive.google.com/file/d/1Siz-rV5l5xhyUQDMBll1RHU6V2vIwsIk/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-amber-500 to-orange-500",
      cardBorder: "hover:border-amber-500",
      glowColor: "group-hover:shadow-amber-500/20"
    },
    {
      id: "04",
      title: "PERANCANGAN STRATEGIK",
      desc: "Pelan strategik, taktikal, operasi dan pencapaian mengikut tahun",
      icon: "icons/modul_04_perancangan_strategik.jpg",
      url: "https://canva.link/a0tg4nhpv0oiizz",
      subLinks: [
        {
          year: "2024/2025",
          label: "Tahun 2024/2025",
          url: "https://drive.google.com/drive/folders/1zY000Jc8s8YGniSvmw-7z57qrpNix_C5?usp=drive_link",
          icon: "fa-brands fa-google-drive text-amber-500",
          platform: "Google Drive"
        },
        {
          year: "2025/2026",
          label: "Tahun 2025/2026",
          url: "https://canva.link/2erkbd6ds9j2o5s",
          icon: "fa-solid fa-palette text-cyan-500",
          platform: "Canva"
        },
        {
          year: "2026",
          label: "Tahun 2026",
          url: "https://canva.link/a0tg4nhpv0oiizz",
          icon: "fa-solid fa-palette text-cyan-500",
          platform: "Canva"
        }
      ],
      badgeClass: "bg-gradient-to-r from-rose-600 to-pink-600",
      cardBorder: "hover:border-rose-500",
      glowColor: "group-hover:shadow-rose-500/20"
    },
    {
      id: "05",
      title: "MINIT MESYUARAT",
      desc: "Keputusan, tindakan dan maklum balas mesyuarat pengurusan",
      icon: "icons/modul_05_minit_mesyuarat.jpg",
      url: "https://drive.google.com/drive/folders/1c0f4eCMMx1BS9kII1NGOLmVahdgqesRO?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-emerald-600 to-teal-600",
      cardBorder: "hover:border-emerald-500",
      glowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      id: "06",
      title: "TAKWIM & JADUAL",
      desc: "Takwim tahunan, jadual aktiviti dan tarikh penting persekolahan",
      icon: "icons/modul_06_takwim_jadual.jpg",
      url: "https://drive.google.com/drive/folders/1P1rWS6theQeDEOKvKOSKQstvTwZknSy3?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-red-600 to-rose-600",
      cardBorder: "hover:border-red-500",
      glowColor: "group-hover:shadow-red-500/20"
    },
    {
      id: "07",
      title: "SURAT & PEKELILING",
      desc: "Surat masuk, surat keluar, pekeliling ikhtisas dan makluman rasmi",
      icon: "icons/modul_07_surat_pekeliling.jpg",
      url: "https://drive.google.com/drive/folders/11nR-NBncYV8g4RQNA-uDI4xwIFuSOGx0?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-sky-600 to-blue-600",
      cardBorder: "hover:border-sky-500",
      glowColor: "group-hover:shadow-sky-500/20"
    },
    {
      id: "08",
      title: "PEMANTAUAN & PENILAIAN",
      desc: "Instrumen, evidens dan laporan pemantauan",
      icon: "icons/modul_08_pemantauan.jpg",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing",
      badgeClass: "bg-gradient-to-r from-indigo-600 to-violet-600",
      cardBorder: "hover:border-indigo-500",
      glowColor: "group-hover:shadow-indigo-500/20"
    },
    {
      id: "09",
      title: "DATA & ANALISIS",
      desc: "Ringkasan data, laporan dan analisis pengurusan",
      icon: "icons/modul_09_data_analisis.jpg",
      url: "https://drive.google.com/file/d/1cT5SAO3gVo7YHGOMM1JzwSQ02XO2orx4/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-blue-700 to-indigo-700",
      cardBorder: "hover:border-blue-600",
      glowColor: "group-hover:shadow-blue-600/20"
    },
    {
      id: "10",
      title: "PROGRAM & TINDAKAN",
      desc: "Kertas kerja, pelan pelaksanaan dan laporan program aktiviti",
      icon: "icons/modul_10_program_tindakan.jpg",
      url: "https://drive.google.com/drive/folders/1FllwdE5SelZNQ9nu0z1iRixWGKP6-8B-?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-pink-600 to-rose-600",
      cardBorder: "hover:border-pink-500",
      glowColor: "group-hover:shadow-pink-500/20"
    },
    {
      id: "11",
      title: "PENGURUSAN FAIL & DOKUMENTASI",
      desc: "Indeks fail, templat rasmi dan evidens (OPR & Storyboard)",
      icon: "icons/modul_11_pengurusan_fail.jpg",
      url: "https://drive.google.com/drive/folders/1f4NsGEt5MFGN7Ub06P3CYp8vBul6y3OT?usp=drive_link",
      tags: ["OPR", "Storyboard"],
      badgeClass: "bg-gradient-to-r from-emerald-600 to-green-600",
      cardBorder: "hover:border-emerald-500",
      glowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      id: "12",
      title: "ARKIB & AMALAN BAIK",
      desc: "Dokumen tahun terdahulu dan perkongsian amalan terbaik sekolah",
      icon: "icons/modul_12_arkib_amalan_baik.jpg",
      url: "https://drive.google.com/drive/folders/1XY3bkD0cbO-KSsHiufC_3VuW2CnXuNyf?usp=drive_link",
      badgeClass: "bg-gradient-to-r from-amber-600 to-yellow-600",
      cardBorder: "hover:border-amber-600",
      glowColor: "group-hover:shadow-amber-500/20"
    }
  ],

  // Makluman Terkini
  announcements: [
    {
      day: "14",
      month: "Okt 2026",
      title: "Mesyuarat Pengurusan Bil. 7/2026",
      details: "Rabu | 1.30 petang | Bilik Mesyuarat",
      url: "https://drive.google.com/file/d/1SIegvXZ91zrQCDkoO0P2samNXZOd6QVU/view?usp=sharing"
    },
    {
      day: "13",
      month: "Okt 2026",
      title: "Pengisian PBD sudah boleh dimulakan",
      details: "Untuk perhatian rakan-rakan guru baharu & semua guru matapelajaran",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing"
    },
    {
      day: "09",
      month: "Okt 2026",
      title: "PDPR Pendidikan Islam Tahun 5",
      details: "7.20 – 8.20 pagi | Bidang Ulum",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing"
    },
    {
      day: "01",
      month: "Okt 2026",
      title: "Pelancaran Bulan PRESTIG3 & Amalan Baik",
      details: "Semua Guru & Warga SK Taman Permas Jaya 3",
      url: "https://drive.google.com/file/d/1hDaUGJ9jAWEMZdCcMfsVqUu-gNVZ7mSu/view?usp=sharing"
    }
  ],

  // Pautan Pantas
  quickLinks: [
    {
      title: "Google Drive",
      desc: "Folder Induk Dashboard",
      icon: "fa-brands fa-google-drive",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50 hover:bg-amber-100 border-amber-200",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing"
    },
    {
      title: "Takwim Sekolah",
      desc: "Jadual Aktiviti 2026",
      icon: "fa-regular fa-calendar-days",
      iconColor: "text-red-500",
      bgColor: "bg-red-50 hover:bg-red-100 border-red-200",
      url: "https://drive.google.com/drive/folders/1P1rWS6theQeDEOKvKOSKQstvTwZknSy3?usp=drive_link"
    },
    {
      title: "Templat Rasmi",
      desc: "Surat, Minit & Borang",
      icon: "fa-regular fa-file-lines",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing"
    },
    {
      title: "Borang & Rekod",
      desc: "Perekodan & Kehadiran",
      icon: "fa-solid fa-rectangle-list",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing"
    },
    {
      title: "Sumber KPM",
      desc: "Portal Rasmi KPM & JPN",
      icon: "fa-solid fa-globe",
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
      url: "https://www.moe.gov.my"
    },
    {
      title: "Hubungi Kami",
      desc: "Tel: 07-3887033 / Emel",
      icon: "fa-solid fa-phone",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200",
      url: "mailto:JBA1092@moe.edu.my"
    }
  ],

  // Kalendar Pengurusan (Oktober 2026 sebagai rujukan ringkas)
  calendarEvents: [
    { date: "6-7 Okt", event: "Ujian Matrik Tahun 4", type: "exam" },
    { date: "13 Okt", event: "Peperiksaan BM & BI", type: "exam" },
    { date: "14 Okt", event: "Peperiksaan MT & Sains", type: "exam" },
    { date: "16 Okt", event: "Mesyuarat Pengurusan Bil. 7", type: "meeting" }
  ],

  // Rujukan Takwim Lengkap 2026
  getTakwimData: function() {
    return (typeof PORTAL_TAKWIM_2026 !== 'undefined') ? PORTAL_TAKWIM_2026 : null;
  }
};

// Ambil konfigurasi dari localStorage jika ada disimpan pengguna
function getSavedConfig() {
  try {
    const saved = localStorage.getItem("SKTPJ3_PORTAL_CONFIG");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Jika versi konfigurasi sama, guna yang disimpan. Jika berbeza, guna tetapan terkini.
      if (parsed && parsed.version === DEFAULT_PORTAL_CONFIG.version) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Gagal membaca localStorage, guna tetapan lalai.", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_PORTAL_CONFIG));
}

function saveConfig(config) {
  try {
    localStorage.setItem("SKTPJ3_PORTAL_CONFIG", JSON.stringify(config));
    return true;
  } catch (e) {
    console.error("Gagal menyimpan ke localStorage:", e);
    return false;
  }
}

function resetConfig() {
  try {
    localStorage.removeItem("SKTPJ3_PORTAL_CONFIG");
    return true;
  } catch (e) {
    return false;
  }
}
