/**
 * Konfigurasi Utama Portal MyPENTADBIRAN - SK TAMAN PERMAS JAYA 3
 * Boleh diubah suai pada bila-bila masa atau melalui butang Tetapan di laman web.
 */
const DEFAULT_PORTAL_CONFIG = {
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
      url: "https://drive.google.com/file/d/1y5M2LL9kZRtVOamElYj02GRENIkkg2cD/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
      cardBorder: "hover:border-purple-500",
      glowColor: "group-hover:shadow-purple-500/20"
    },
    {
      id: "02",
      title: "BUKU PENGURUSAN SEKOLAH",
      desc: "Buku pengurusan, maklumat dan profil sekolah",
      icon: "icons/modul_02_buku_pengurusan.jpg",
      url: "https://drive.google.com/file/d/1pKg41zhfS5M7iR33sVI5qFlGNxKeZ_mv/view?usp=sharing",
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
      desc: "Pelan strategik, taktikal, operasi dan pencapaian",
      icon: "icons/modul_04_perancangan_strategik.jpg",
      url: "https://drive.google.com/file/d/1XfCJvubsnQsyl4DVNIyq_NESQPTiwXCr/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-rose-600 to-pink-600",
      cardBorder: "hover:border-rose-500",
      glowColor: "group-hover:shadow-rose-500/20"
    },
    {
      id: "05",
      title: "MINIT MESYUARAT",
      desc: "Keputusan, tindakan dan maklum balas",
      icon: "icons/modul_05_minit_mesyuarat.jpg",
      url: "https://drive.google.com/file/d/1SIegvXZ91zrQCDkoO0P2samNXZOd6QVU/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-emerald-600 to-teal-600",
      cardBorder: "hover:border-emerald-500",
      glowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      id: "06",
      title: "TAKWIM & JADUAL",
      desc: "Takwim tahunan, jadual mesyuarat dan tarikh penting",
      icon: "icons/modul_06_takwim_jadual.jpg",
      url: "https://drive.google.com/file/d/1qruPhKxFOhcpBVjwq9CdKfdSq75iiAw-/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-red-600 to-rose-600",
      cardBorder: "hover:border-red-500",
      glowColor: "group-hover:shadow-red-500/20"
    },
    {
      id: "07",
      title: "SURAT & PEKELILING",
      desc: "Surat masuk, surat keluar, pekeliling dan makluman rasmi",
      icon: "icons/modul_07_surat_pekeliling.jpg",
      url: "https://drive.google.com/file/d/1dEXtBaudupI-mNzhxNxwbdfxKs4NUxrw/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-sky-600 to-blue-600",
      cardBorder: "hover:border-sky-500",
      glowColor: "group-hover:shadow-sky-500/20"
    },
    {
      id: "08",
      title: "PEMANTAUAN & PENILAIAN",
      desc: "Instrumen, evidens dan laporan",
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
      desc: "Kertas kerja, pelan pelaksanaan dan laporan program",
      icon: "icons/modul_10_program_tindakan.jpg",
      url: "https://drive.google.com/file/d/1jnhu_HGSfWy4vEnflgPLsJ1bn3cIGJN5/view?usp=sharing",
      badgeClass: "bg-gradient-to-r from-pink-600 to-rose-600",
      cardBorder: "hover:border-pink-500",
      glowColor: "group-hover:shadow-pink-500/20"
    },
    {
      id: "11",
      title: "PENGURUSAN FAIL & DOKUMENTASI",
      desc: "Indeks fail, templat rasmi dan evidens",
      icon: "icons/modul_11_pengurusan_fail.jpg",
      url: "https://drive.google.com/drive/folders/1S-1saTXKEbZi4m6J8G_JRjVXAKObXPcv?usp=sharing",
      badgeClass: "bg-gradient-to-r from-emerald-600 to-green-600",
      cardBorder: "hover:border-emerald-500",
      glowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      id: "12",
      title: "ARKIB & AMALAN BAIK",
      desc: "Dokumen tahun terdahulu dan perkongsian amalan terbaik",
      icon: "icons/modul_12_arkib_amalan_baik.jpg",
      url: "https://drive.google.com/file/d/1dCuZ8_0BLRm-ts2F8MTH3eHUOMoO_XlV/view?usp=sharing",
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
      url: "https://drive.google.com/file/d/1qruPhKxFOhcpBVjwq9CdKfdSq75iiAw-/view?usp=sharing"
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
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Gagal membaca localStorage, guna tetapan lalai.", e);
  }
  return DEFAULT_PORTAL_CONFIG;
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
