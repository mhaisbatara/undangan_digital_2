# Website Undangan Pernikahan Digital (Mobile-First)

Website undangan pernikahan digital yang romantis, elegan, dan mobile-first dengan palet warna **dusty slate blue**, aksen **lavender purple**, dan putih bersih.

Dibuat menggunakan **Next.js 14**, **Tailwind CSS**, dan **Lucide Icons** dengan animasi halus saat scroll.

---

## 🎨 Gaya Visual & Desain
- **Palet Warna**: Gradasi biru dusty/slate (`#567a92`), ungu lavender (`#9F78C8`), dan putih bersih.
- **Dekorasi**: Ilustrasi bunga lavender anggun di sisi kiri dan kanan foto serta ornamen pemisah.
- **Frame Foto**: Bingkai lingkaran besar dengan efek halo glow lembut di cover pembuka.
- **Tipografi**: 
  - Script / Kaligrafi: *Great Vibes* & *Alex Brush* untuk nama mempelai.
  - Teks Bersih: *Plus Jakarta Sans* untuk body dan label.
  - Kaligrafi Arab: *Amiri* untuk ayat suci Al-Qur'an.
- **Tampilan**: *Mobile-first*. Sangat nyaman diakses di smartphone dan tetap estetik di layar desktop dengan tampilan smartphone mockup interaktif.

---

## 📋 Alur Halaman (10 Bagian Lengkap)
1. **Cover Pembuka (Layar Penuh)**:
   - Foto mempelai berbingkai lingkaran besar dengan efek soft glow dan bunga lavender di kiri-kanan.
   - "The Wedding Of", kaligrafi nama mempelai ("Nisa & Fuad"), dan tanggal ("23.12.2024").
   - Tombol **"Simpan Tanggal"** (terhubung langsung ke Google Calendar & unduh file `.ics`).
   - Indikator panah ke bawah dengan animasi melayang (*bounce*).
   - Personalisasi nama tamu otomatis lewat URL query parameter (`?to=Nama+Tamu`).
   - Tombol **"Buka Undangan"** yang membuka undangan dan memutar musik latar secara otomatis.
2. **Salam Pembuka**:
   - Kaligrafi Bismillah, salam hangat islami, dan kutipan ayat Al-Qur'an (QS. Ar-Rum: 21).
3. **Profil Mempelai**:
   - Kartu elegan untuk mempelai pria dan wanita (foto, nama lengkap & gelar, putra/putri ke berapa, nama orang tua, dan tombol Instagram).
4. **Detail Acara**:
   - Kartu terpisah untuk **Akad Nikah** dan **Resepsi**.
   - Dilengkapi hari, tanggal, jam WIB, dan nama tempat.
   - **Live Countdown Timer** menuju hari H (Hari, Jam, Menit, Detik).
   - Tombol Simpan Tanggal kalender pada setiap sesi acara.
5. **Lokasi**:
   - Alamat lengkap tempat acara.
   - Peta Google Maps interaktif tertanam (*embedded iframe*).
   - Tombol **"Buka Google Maps"** untuk navigasi langsung di aplikasi Maps pengguna.
6. **Galeri Foto**:
   - Grid foto pre-wedding estetis dengan fitur **Lightbox** interaktif (klik foto untuk layar penuh, navigasi next/prev, dan tombol tutup).
7. **Kisah Cinta (Love Story)**:
   - Timeline interaktif perjalanan cinta pasangan (Awal Pertemuan, Komitmen, Khitbah, Menuju Pelaminan).
8. **RSVP & Ucapan**:
   - Formulir konfirmasi kehadiran (Nama, Konfirmasi Hadir/Tidak, Jumlah Tamu).
   - Kolom ucapan dan doa restu.
   - Efek kembang api konfeti (*confetti burst*) saat tamu mengirimkan ucapan.
   - Daftar ucapan tamu yang langsung tampil secara *real-time* dan tersimpan di `localStorage`.
9. **Amplop Digital / Hadiah**:
   - Kartu rekening bank (BCA, Mandiri, BSI) dengan tombol **"Salin No. Rekening"** (notifikasi berhasil tersalin).
   - Alamat pengiriman kado fisik dengan tombol **"Salin Alamat"**.
10. **Penutup**:
    - Ucapan terima kasih keluarga besar, kaligrafi nama kedua mempelai, dan footer elegan.
- **Musik Latar**: Pemutar musik melayang (*floating player*) dengan tombol play/pause beranimasi piringan hitam (*vinyl disc*).

---

## ⚙️ Kustomisasi Data (Satu File Saja)

Seluruh teks, nama mempelai, tanggal acara, lokasi, foto, nomor rekening, hingga musik latar dapat diubah dengan sangat mudah hanya melalui **SATU file konfigurasi**:

📂 `src/data/weddingConfig.ts`

Contoh struktur konfigurasi:
```typescript
export const weddingConfig = {
  couple: {
    scriptTitle: "Nisa & Fuad",
    weddingDateDisplay: "23.12.2024",
    weddingDateISO: "2024-12-23T08:00:00+07:00",
    heroPhoto: "/images/couple-hero.jpg",
    audioUrl: "https://...",
  },
  groom: {
    fullName: "Ahmad Fuad Rahman, S.Kom.",
    nickname: "Fuad",
    sonOf: "Putra pertama dari",
    fatherName: "Bpk. H. Hendra Wijaya",
    motherName: "Ibu Hj. Ratna Sari",
    ...
  },
  // dll...
};
```

---

## 🚀 Cara Menjalankan Project

1. **Jalankan development server**:
   ```bash
   npm run dev
   ```
2. Buka browser di [http://localhost:3000](http://localhost:3000).

### Cara Mengirimkan Undangan dengan Nama Tamu
Tambahkan parameter `?to=` pada akhir URL undangan:
- [http://localhost:3000/?to=Bapak+Budi+Santoso](http://localhost:3000/?to=Bapak+Budi+Santoso)
- [http://localhost:3000/?to=Keluarga+Besar+Hendra](http://localhost:3000/?to=Keluarga+Besar+Hendra)
- [http://localhost:3000/?to=Sarah+Amanda](http://localhost:3000/?to=Sarah+Amanda)
