export interface WeddingConfig {
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  couple: {
    groomNickname: string;
    brideNickname: string;
    scriptTitle: string; // e.g. "Nisa & Fuad"
    weddingDateDisplay: string; // e.g. "23.12.2024"
    weddingDateISO: string; // "2024-12-23T08:00:00+07:00"
    heroPhoto: string;
    heroSubtitle: string;
    audioUrl: string;
  };
  greeting: {
    bismillah: string;
    salam: string;
    intro: string;
    quoteArabic: string;
    quoteTranslation: string;
    quoteSource: string;
  };
  groom: {
    fullName: string;
    nickname: string;
    sonOf: string; // e.g. "Putra pertama dari"
    fatherName: string;
    motherName: string;
    instagram: string;
    photo: string;
  };
  bride: {
    fullName: string;
    nickname: string;
    daughterOf: string; // e.g. "Putri kedua dari"
    fatherName: string;
    motherName: string;
    instagram: string;
    photo: string;
  };
  events: {
    akad: {
      title: string;
      day: string;
      date: string;
      time: string;
      venue: string;
      address: string;
      startDateISO: string;
      endDateISO: string;
    };
    resepsi: {
      title: string;
      day: string;
      date: string;
      time: string;
      venue: string;
      address: string;
      startDateISO: string;
      endDateISO: string;
    };
  };
  location: {
    venueName: string;
    fullAddress: string;
    googleMapsUrl: string;
    mapEmbedUrl: string;
  };
  stories: Array<{
    year: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    caption: string;
    span?: string;
  }>;
  gifts: {
    bankAccounts: Array<{
      bank: string;
      accountNumber: string;
      accountHolder: string;
      logo?: string;
      colorTheme?: string;
    }>;
    physicalGift: {
      recipient: string;
      phone: string;
      address: string;
    };
  };
  closing: {
    message: string;
    groomAndBride: string;
    familyGreeting: string;
  };
}

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "The Wedding of Nisa & Fuad | 23.12.2024",
    description: "Undangan Pernikahan Digital Nisa & Fuad. Senin, 23 Desember 2024.",
    ogImage: "/images/couple-reference.jpg",
  },
  couple: {
    groomNickname: "Fuad",
    brideNickname: "Nisa",
    scriptTitle: "Nisa & Fuad",
    weddingDateDisplay: "23.12.2024",
    weddingDateISO: "2024-12-23T08:00:00+07:00",
    heroPhoto: "/images/couple-hd.jpg",
    heroSubtitle: "The Wedding Of",
    // Lagu latar: Raim Laode - Bersenja Gurau
    audioUrl: "/music/bersenja-gurau.mp3",
  },
  greeting: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    intro: "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia pernikahan kami:",
    quoteArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    quoteTranslation: "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”",
    quoteSource: "QS. Ar-Rum: 21",
  },
  groom: {
    fullName: "Ahmad Fuad Rahman, S.Kom.",
    nickname: "Fuad",
    sonOf: "Putra pertama dari",
    fatherName: "Bpk. H. Hendra Wijaya",
    motherName: "Ibu Hj. Ratna Sari",
    instagram: "https://instagram.com",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  },
  bride: {
    fullName: "Annisa Lathifah, S.Ds.",
    nickname: "Nisa",
    daughterOf: "Putri kedua dari",
    fatherName: "Bpk. Ahmad Subarjo",
    motherName: "Ibu Dra. Hj. Siti Fatimah",
    instagram: "https://instagram.com",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  },
  events: {
    akad: {
      title: "Akad Nikah",
      day: "Senin",
      date: "23 Desember 2024",
      time: "08.00 - 10.00 WIB",
      venue: "Masjid Raya Baiturrahman",
      address: "Jl. Melati Utama No. 45, Kebayoran Baru, Jakarta Selatan",
      startDateISO: "2024-12-23T08:00:00+07:00",
      endDateISO: "2024-12-23T10:00:00+07:00",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      day: "Senin",
      date: "23 Desember 2024",
      time: "11.00 - 15.00 WIB",
      venue: "Grand Seruni Ballroom",
      address: "Jl. Casablanca Raya Kav. 88, Menteng Dalam, Tebet, Jakarta Selatan",
      startDateISO: "2024-12-23T11:00:00+07:00",
      endDateISO: "2024-12-23T15:00:00+07:00",
    },
  },
  location: {
    venueName: "Grand Seruni Ballroom",
    fullAddress: "Jl. Casablanca Raya Kav. 88, Menteng Dalam, Tebet, Jakarta Selatan, DKI Jakarta 12870",
    googleMapsUrl: "https://maps.google.com/?q=-6.224167,106.843194",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.279883582496!2d106.8407421!3d-6.2267801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f269a8b8f1%3A0x7d6a5c2b3e712345!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000",
  },
  stories: [
    {
      year: "2019",
      title: "Awal Pertemuan",
      description: "Berawal dari sebuah proyek kolaborasi di kampus yang sama. Percakapan santai di perpustakaan membuka pintu pertemanan yang hangat dan penuh tawa.",
    },
    {
      year: "2021",
      title: "Menjalin Komitmen",
      description: "Setelah saling mengenal kebaikan serta kekurangan masing-masing, kami memutuskan untuk saling melangkah bersama dalam sebuah komitmen yang tulus.",
    },
    {
      year: "2024",
      title: "Hari Pertunangan (Khitbah)",
      description: "Dengan restu kedua orang tua dan keluarga besar, kami mengikat janji suci pertunangan dan bersiap menyongsong gerbang pernikahan.",
    },
    {
      year: "23.12.2024",
      title: "Menuju Pelaminan",
      description: "Insya Allah, ikatan cinta ini akan diresmikan dalam akad suci pernikahan sebagai babak baru perjalanan hidup kami berdua.",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      caption: "Tatapan penuh harap menuju masa depan bersama",
      span: "col-span-2 aspect-[16/9]",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=700&q=80",
      caption: "Momen manis dalam tawa dan senyuman",
      span: "col-span-1 aspect-[4/5]",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80",
      caption: "Dua hati yang saling melengkapi",
      span: "col-span-1 aspect-[4/5]",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=700&q=80",
      caption: "Langkah bersama di jalan penuh cinta",
      span: "col-span-1 aspect-square",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=80",
      caption: "Janji setia dalam setiap detik kehidupan",
      span: "col-span-1 aspect-square",
    },
  ],
  gifts: {
    bankAccounts: [
      {
        bank: "Bank BCA",
        accountNumber: "5271298410",
        accountHolder: "Annisa Lathifah",
        logo: "BCA",
        colorTheme: "from-blue-600 to-blue-800",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "1370019283741",
        accountHolder: "Ahmad Fuad Rahman",
        logo: "MANDIRI",
        colorTheme: "from-amber-600 to-blue-900",
      },
      {
        bank: "Bank Syariah Indonesia (BSI)",
        accountNumber: "7182930491",
        accountHolder: "Annisa Lathifah",
        logo: "BSI",
        colorTheme: "from-teal-600 to-emerald-800",
      },
    ],
    physicalGift: {
      recipient: "Annisa & Fuad",
      phone: "0812-8899-7722",
      address: "Jl. Casablanca Raya Kav. 88, Apartemen Menteng Residence Tower A Lt. 12 No. 05, Tebet, Jakarta Selatan 12870",
    },
  },
  closing: {
    message: "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami berdua.",
    groomAndBride: "Nisa & Fuad",
    familyGreeting: "Kami yang berbahagia,\nKeluarga Besar Bpk. Ahmad Subarjo & Ibu Dra. Hj. Siti Fatimah\nKeluarga Besar Bpk. H. Hendra Wijaya & Ibu Hj. Ratna Sari",
  },
};
