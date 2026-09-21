export interface MenuItem {
  id: string;
  name: string;
  category: 'wonton' | 'siomay' | 'spicy' | 'combo';
  price: number;
  pcsText: string;
  description: string;
  image: string;
  tag: string;
  tagBgClass: string;
  tagTextClass: string;
  crunchRating: string;
  includesSauce: string;
  isCombo?: boolean;
}

export interface CraftsmanshipPillar {
  num: string;
  tag: string;
  title: string;
  desc: string;
  icon: string;
  badgeLabel: string;
  badgeValue: string;
}

export interface PortionTier {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  pcs: string;
  sauce: string;
  drinks: string;
  estTime: string;
  desc: string;
}

export interface Outlet {
  id: string;
  city: string;
  name: string;
  address: string;
  hours: string;
  isOpened: boolean;
  mapsUrl: string;
}

export interface PairingRitual {
  id: string;
  step: string;
  title: string;
  pairing: string;
  note: string;
  icon: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'wonton-udang',
    name: 'Wonton Goreng Udang Renyah',
    category: 'wonton',
    price: 24000,
    pcsText: '5 PCS / PORSI',
    description: 'Daging udang laut segar dengan balutan kulit wonton mekar keemasan. Super renyah dan gurih alami tanpa pengawet.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGNQ3DN4eNvYYigwYJnHVrM4iR1z2_VEc7szjdlFxzJinjVmTuyurx4nQnvFMaF39crb1TolkPrhVSS6VeTJyyfmCs0c7tM6z45wnm6oqfLwFmTRQEPuEG1GMIW41v4mTrfqQTlHtgd7Hy5rNiNCJ7pI9NdTCaPXuW553wkbvHbG3WOXCw8v5GE2cgbGX8EbZAQNImbfwzi8QbPxPWvLgjpcu4cV3JTQFu6Y0iCf9hXR4_BIwSJWHQyg',
    tag: 'Varian Terfavorit',
    tagBgClass: 'bg-tertiary-container',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: 'Termasuk Signature Chili Oil',
  },
  {
    id: 'siomay-kulit-tahu',
    name: 'Siomay Kulit Tahu Crispy',
    category: 'siomay',
    price: 26000,
    pcsText: '4 PCS / PORSI',
    description: 'Kombinasi kelembutan siomay ayam udang dengan balutan kulit kembang tahu sutra yang digoreng garing berserat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4tV5fm2ikEqo0-ZqHk7lOYZk_3b9lYFwLbSO54ZOgA8I751y1BbGT1fY4XxUXfdFEO__o63nxqKNKPbvpYbIyn4DWnNH3jolj6bfzOKQ_yDqHPuoU7tom8mx8NE8ugBXob4B2DtGoGp0ALnxOLZ_soz9oeqjoLCW0KoDlht_EGk3pSMpWQLn6x44Guy71Xx4mO0cttufsbjatovu0lOYiTeaFkYhYTwVG-3Fe6HdNNi2Ts-17IB8mbA',
    tag: 'Rekomendasi Chef',
    tagBgClass: 'bg-secondary-container',
    tagTextClass: 'text-on-secondary-fixed',
    crunchRating: '4/5',
    includesSauce: 'Termasuk Saus Asam Manis',
  },
  {
    id: 'pangsit-pedas-garlic',
    name: 'Pangsit Pedas Garlic Crunch',
    category: 'spicy',
    price: 28000,
    pcsText: '5 PCS / PORSI',
    description: 'Pangsit goreng renyah yang langsung dibalur bumbu chili flakes, minyak bawang putih goreng, dan taburan daun ketumbar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoNGfDvPFKUGgwIVRDbPxWasuKB0SzvtC6xsWQQUksqZGEBo5dyNJ_mv_9WojyfnDC77pCttw1VGq1pPshx2pNLFuS56Bq0xUhJf1oF4PebiJXPXRcw1lRKugoT8queyoUypsDsBdWoSX9jEBGAQI7DiSGvflSihFb1zrh6BbrfR6rsLtaTZ43MmFHjDmSDhrNMhBzmnempNHb6pElluJcD94ywu77_FRoNDjCU9ZiR-bzLJNbr7ETkQ',
    tag: 'Tingkat Pedas Ekstra',
    tagBgClass: 'bg-tertiary',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: 'Termasuk Chili Flakes Spesial',
  },
  {
    id: 'money-bag-golden',
    name: 'Money Bag Golden Delight',
    category: 'wonton',
    price: 29000,
    pcsText: '4 PCS / PORSI',
    description: 'Pangsit berbentuk kantung uang emas berisi cincangan udang raja, potongan rebung manis, dan bumbu minyak wijen harum.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB8aJFJLi13WAMH4O-JbpfIzr3v7RLCJ8SP3j8d9O4NmCpZDFBzMmxETS9R4V8rUJ0D0zBdjfA4MVBZq7KbXmNpwgUghq0IJPBTLAOW4o1RGNLAVALuSUYMZ-m-FQ3PN6d5V7SYxSETWhqVdAPK5uyEr1DZF_jSNmoBcPK4nYyFzHAJU9EdBbcpXPnRw3UiElOlNp15t6iHIUROM5r0xd3-TI5hYddBoJhdwwHJ0UluNEd_4rrTdBfMQ',
    tag: 'Koleksi Eksklusif',
    tagBgClass: 'bg-secondary-fixed',
    tagTextClass: 'text-on-secondary-fixed',
    crunchRating: '4.5/5',
    includesSauce: 'Termasuk Chili Dip & Mayo',
  },
  {
    id: 'combo-party-feast',
    name: 'Platter Combo DIMZY Party Feast',
    category: 'combo',
    price: 79000,
    pcsText: 'PAKET JUMBO 16 PCS',
    description: 'Pilihan lengkap isi: 4 Wonton Udang, 4 Siomay Kulit Tahu, 4 Money Bag Golden, dan 4 Pangsit Pedas Garlic + 3 Wadah Saus Lengkap (Signature Chili Oil, Thai Sweet Chili, & Garlic Mayo).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q',
    tag: 'Paket Kombo 16 Pcs',
    tagBgClass: 'bg-tertiary',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: '3 Wadah Saus Lengkap',
    isCombo: true,
  },
];

export const CRAFTSMANSHIP_PILLARS: CraftsmanshipPillar[] = [
  {
    num: '01',
    tag: '01 / Golden Crust',
    title: 'Kulit Tipis Ekstra Krispi',
    desc: 'Formula kulit dimsum buatan tangan berketebalan presisi 0.8mm. Saat menyentuh minyak panas berputar, mekar membentuk gelembung krispi yang tidak alot saat dingin.',
    icon: 'flare',
    badgeLabel: 'Tingkat Renyah',
    badgeValue: '5/5 Stars Crisp',
  },
  {
    num: '02',
    tag: '02 / Pure Proteins',
    title: 'Isian 90% Daging Murni',
    desc: 'Tanpa dominasi tepung kanji. Daging dada ayam segar dan udang kupas cincang kasar memberikan gigitan kenyal ("boing-boing") bertabur aroma minyak wijen sangrai.',
    icon: 'set_meal',
    badgeLabel: 'Rasio Daging Segar',
    badgeValue: '90% Udang & Ayam',
  },
  {
    num: '03',
    tag: '03 / Artisan Dip',
    title: 'Chili Oil Fermentasi Khas',
    desc: 'Diracik dari 5 jenis cabai kering pilihan, bawang putih cincang renyah, cengkeh, dan minyak aromatik yang diseduh lambat selama 6 jam untuk sensasi pedas gurih mendalam.',
    icon: 'soup_kitchen',
    badgeLabel: 'Aroma Infusi',
    badgeValue: '6-Hours Slow Steep',
  },
];

export const PORTION_TIERS: Record<number, PortionTier> = {
  1: {
    id: 1,
    title: 'Paket Solo Crispy Snack',
    subtitle: '1 Orang',
    price: 38000,
    pcs: '7 Pcs',
    sauce: '2 Cup',
    drinks: '1 Botol',
    estTime: '15 Mnt',
    desc: '1 Porsi Wonton Udang Goreng + 2 Pcs Siomay Goreng + Signature Chili Oil + 1 Liang Teh dingin.',
  },
  2: {
    id: 2,
    title: 'Paket Duo Bestie Crunch',
    subtitle: 'Date / Bestie',
    price: 65000,
    pcs: '12 Pcs',
    sauce: '3 Cup',
    drinks: '2 Botol',
    estTime: '15 Mnt',
    desc: '5 Wonton Goreng + 4 Siomay Kulit Tahu + 3 Money Bag + 2 Sambal Favorit + 2 Liang Teh Manis Segar.',
  },
  3: {
    id: 3,
    title: 'Paket Party Mabar Kantor',
    subtitle: '4-6 Orang',
    price: 135000,
    pcs: '25 Pcs',
    sauce: '6 Cup',
    drinks: '4 Botol',
    estTime: '20 Mnt',
    desc: 'Kombo super lengkap semua varian krispi + 6 Saus Lengkap (Chili Oil, Sweet Dip, Mayo Garlic) + 4 Minuman.',
  },
};

export const PAIRING_RITUALS: PairingRitual[] = [
  {
    id: 'ritual-1',
    step: 'Langkah 1',
    title: 'Gigitan Pertama Tanpa Saus',
    pairing: 'Merasakan Bunyi Kriuk Otentik',
    note: 'Cicipi ujung kulit wonton berketebalan 0.8mm saat masih mengepul untuk mendengar letupan renyah dan menikmati rasa manis alami udang laut segar.',
    icon: 'restaurant',
  },
  {
    id: 'ritual-2',
    step: 'Langkah 2',
    title: 'Cocolan Signature Chili Oil',
    pairing: 'Kombinasi Minyak Bawang & Rempah',
    note: 'Aduk minyak cabai dari dasar cup agar serpihan bawang putih garing dan rempah terangkat sempurna, lalu celupkan separuh bagian dimsum.',
    icon: 'soup_kitchen',
  },
  {
    id: 'ritual-3',
    step: 'Langkah 3',
    title: 'Tips Menghangatkan Ulang',
    pairing: 'Air Fryer 180°C Selama 3 Menit',
    note: 'Jika disimpan atau tidak langsung disantap, gunakan air fryer selama 3 menit tanpa minyak tambahan. Tekstur krispi mekar seketika seperti baru diangkat.',
    icon: 'local_fire_department',
  },
];

export const OUTLETS: Outlet[] = [
  {
    id: 'senopati',
    city: 'JAKARTA SELATAN',
    name: 'DIMZY Senopati',
    address: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan',
    hours: '10:00 - 23:00 WIB',
    isOpened: true,
    mapsUrl: 'https://maps.google.com/?q=DIMZY+Senopati',
  },
  {
    id: 'bsd',
    city: 'TANGERANG',
    name: 'DIMZY BSD City',
    address: 'Ruko The Breeze Blok L-08, BSD Grand Boulevard, Serpong',
    hours: '09:00 - 22:30 WIB',
    isOpened: true,
    mapsUrl: 'https://maps.google.com/?q=DIMZY+BSD',
  },
  {
    id: 'riau',
    city: 'BANDUNG',
    name: 'DIMZY Riau Heritage',
    address: 'Jl. L. L. R.E. Martadinata No. 88, Citarum, Kota Bandung',
    hours: '10:00 - 22:00 WIB',
    isOpened: true,
    mapsUrl: 'https://maps.google.com/?q=DIMZY+Bandung',
  },
  {
    id: 'manyar',
    city: 'SURABAYA',
    name: 'DIMZY Manyar Kertoarjo',
    address: 'Jl. Manyar Kertoarjo No. 54, Gubeng, Surabaya Timur',
    hours: '10:00 - 23:00 WIB',
    isOpened: true,
    mapsUrl: 'https://maps.google.com/?q=DIMZY+Surabaya',
  },
];
