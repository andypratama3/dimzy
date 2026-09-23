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
    id: 'dimsum-keju-lumer',
    name: 'Dimsum Goreng Keju Lumer Double Kulit',
    category: 'wonton',
    price: 26000,
    pcsText: '4 PCS / PORSI',
    description: 'Dimsum goreng balutan double kulit ekstra krispi dengan lelehan keju lumer hangat di dalam. Tahan renyah 4-6 jam setelah digoreng.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGNQ3DN4eNvYYigwYJnHVrM4iR1z2_VEc7szjdlFxzJinjVmTuyurx4nQnvFMaF39crb1TolkPrhVSS6VeTJyyfmCs0c7tM6z45wnm6oqfLwFmTRQEPuEG1GMIW41v4mTrfqQTlHtgd7Hy5rNiNCJ7pI9NdTCaPXuW553wkbvHbG3WOXCw8v5GE2cgbGX8EbZAQNImbfwzi8QbPxPWvLgjpcu4cV3JTQFu6Y0iCf9hXR4_BIwSJWHQyg',
    tag: 'Menu Juara DIMZY',
    tagBgClass: 'bg-tertiary-container',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: 'Termasuk Saos Sambal Handmade Fresh',
  },
  {
    id: 'wonton-udang',
    name: 'Wonton Double Kulit Udang Krispi',
    category: 'wonton',
    price: 24000,
    pcsText: '5 PCS / PORSI',
    description: 'Olahan udang laut segar dengan teknik double kulit keemasan. Digoreng pada suhu 170-180°C agar renyah tanpa menyerap minyak berlebih.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB8aJFJLi13WAMH4O-JbpfIzr3v7RLCJ8SP3j8d9O4NmCpZDFBzMmxETS9R4V8rUJ0D0zBdjfA4MVBZq7KbXmNpwgUghq0IJPBTLAOW4o1RGNLAVALuSUYMZ-m-FQ3PN6d5V7SYxSETWhqVdAPK5uyEr1DZF_jSNmoBcPK4nYyFzHAJU9EdBbcpXPnRw3UiElOlNp15t6iHIUROM5r0xd3-TI5hYddBoJhdwwHJ0UluNEd_4rrTdBfMQ',
    tag: 'Varian Terfavorit',
    tagBgClass: 'bg-secondary-container',
    tagTextClass: 'text-on-secondary-fixed',
    crunchRating: '5/5',
    includesSauce: 'Termasuk Saos Sambal Handmade Fresh',
  },
  {
    id: 'siomay-kulit-tahu',
    name: 'Siomay Kulit Tahu Keju Melt',
    category: 'siomay',
    price: 26000,
    pcsText: '4 PCS / PORSI',
    description: 'Perpaduan lembutnya daging ayam udang dan lelehan keju di dalam balutan kulit tahu renyah yang tahan garing berjam-jam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4tV5fm2ikEqo0-ZqHk7lOYZk_3b9lYFwLbSO54ZOgA8I751y1BbGT1fY4XxUXfdFEO__o63nxqKNKPbvpYbIyn4DWnNH3jolj6bfzOKQ_yDqHPuoU7tom8mx8NE8ugBXob4B2DtGoGp0ALnxOLZ_soz9oeqjoLCW0KoDlht_EGk3pSMpWQLn6x44Guy71Xx4mO0cttufsbjatovu0lOYiTeaFkYhYTwVG-3Fe6HdNNi2Ts-17IB8mbA',
    tag: 'Rekomendasi Chef',
    tagBgClass: 'bg-secondary-fixed',
    tagTextClass: 'text-on-secondary-fixed',
    crunchRating: '4.5/5',
    includesSauce: 'Termasuk Saos Sambal Handmade Fresh',
  },
  {
    id: 'pangsit-pedas-garlic',
    name: 'Pangsit Double Kulit Pedas Garlic',
    category: 'spicy',
    price: 28000,
    pcsText: '5 PCS / PORSI',
    description: 'Pangsit double kulit renyah berpadu saos sambal handmade segar hasil rebusan bertahap dengan minyak aromatik dan bawang putih gurih.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoNGfDvPFKUGgwIVRDbPxWasuKB0SzvtC6xsWQQUksqZGEBo5dyNJ_mv_9WojyfnDC77pCttw1VGq1pPshx2pNLFuS56Bq0xUhJf1oF4PebiJXPXRcw1lRKugoT8queyoUypsDsBdWoSX9jEBGAQI7DiSGvflSihFb1zrh6BbrfR6rsLtaTZ43MmFHjDmSDhrNMhBzmnempNHb6pElluJcD94ywu77_FRoNDjCU9ZiR-bzLJNbr7ETkQ',
    tag: 'Pedas Gurih Mantap',
    tagBgClass: 'bg-tertiary',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: 'Termasuk Saos Sambal Handmade Ekstra',
  },
  {
    id: 'combo-party-feast',
    name: 'Platter DIMZY Double Kulit Feast',
    category: 'combo',
    price: 79000,
    pcsText: 'PAKET JUMBO 16 PCS',
    description: 'Pilihan lengkap isi: 4 Dimsum Keju Lumer, 4 Wonton Double Kulit, 4 Siomay Kulit Tahu Melt, dan 4 Pangsit Pedas Garlic + Wadah Saos Sambal Handmade Fresh.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q',
    tag: 'Paket Kombo 16 Pcs',
    tagBgClass: 'bg-tertiary',
    tagTextClass: 'text-on-tertiary',
    crunchRating: '5/5',
    includesSauce: 'Saos Sambal Handmade Fresh Jumbo',
    isCombo: true,
  },
];

export const CRAFTSMANSHIP_PILLARS: CraftsmanshipPillar[] = [
  {
    num: '01',
    tag: '01 / Double Crust',
    title: 'Double Kulit Krispi Tahan 4-6 Jam',
    desc: 'Teknik lapisan double kulit khusus menghasilkan letupan krispi mekar yang mengunci kerenyahan hingga 4-6 jam setelah penggorengan tanpa alot dan tanpa menyerap minyak berlebih.',
    icon: 'flare',
    badgeLabel: 'Ketahanan Krispi',
    badgeValue: '4-6 Jam Tetap Renyah',
  },
  {
    num: '02',
    tag: '02 / Melted Center',
    title: 'Daging Gurih & Isian Keju Lumer',
    desc: 'Perpaduan cincangan daging segar berkualitas dengan keju lumer lembut yang meleleh gurih di lidah seketika saat dimsum digigit hangat.',
    icon: 'set_meal',
    badgeLabel: 'Sensasi Isian',
    badgeValue: 'Keju Lumer & Daging Gurih',
  },
  {
    num: '03',
    tag: '03 / Heat & Dip',
    title: 'Suhu 170-180°C & Saos Sambal Handmade',
    desc: 'Digoreng pada suhu ideal 170-180°C agar renyah merata dan tidak cepat gosong, ditemani saos sambal handmade segar hasil rebusan bertahap dengan minyak aromatik dan bawang putih pilihan.',
    icon: 'soup_kitchen',
    badgeLabel: 'Kontrol Suhu Minyak',
    badgeValue: '170-180°C Presisi',
  },
];

export const PORTION_TIERS: Record<number, PortionTier> = {
  1: {
    id: 1,
    title: 'Paket Solo Keju Lumer',
    subtitle: '1 Orang',
    price: 38000,
    pcs: '7 Pcs',
    sauce: '2 Cup',
    drinks: '1 Botol',
    estTime: '15 Mnt',
    desc: '3 Dimsum Keju Lumer + 2 Wonton Double Kulit + 2 Siomay Krispi + Saos Sambal Handmade Fresh + 1 Es Liang Teh dingin.',
  },
  2: {
    id: 2,
    title: 'Paket Duo Double Crunch',
    subtitle: 'Date / Bestie',
    price: 65000,
    pcs: '12 Pcs',
    sauce: '3 Cup',
    drinks: '2 Botol',
    estTime: '15 Mnt',
    desc: '6 Dimsum Keju Lumer + 3 Wonton Double Kulit + 3 Siomay Melt + Saos Sambal Handmade Fresh + 2 Es Liang Teh Manis Segar.',
  },
  3: {
    id: 3,
    title: 'Paket Rame-Rame Krispi Feast',
    subtitle: '4-6 Orang',
    price: 135000,
    pcs: '25 Pcs',
    sauce: '6 Cup',
    drinks: '4 Botol',
    estTime: '20 Mnt',
    desc: 'Pesta dimsum komplit aneka varian double kulit dan keju lumer tahan 4-6 jam + 6 cup Saos Sambal Handmade Fresh + 4 Minuman.',
  },
};

export const PAIRING_RITUALS: PairingRitual[] = [
  {
    id: 'ritual-1',
    step: 'Langkah 1',
    title: 'Gigitan Pertama: Nikmati Keju Lumer',
    pairing: 'Sensasi Double Kulit & Keju Meleleh',
    note: 'Gigit selagi hangat untuk merasakan kontras sempurna antara renyahnya lapisan double kulit dan lelehan keju gurih lembut di dalamnya.',
    icon: 'restaurant',
  },
  {
    id: 'ritual-2',
    step: 'Langkah 2',
    title: 'Cocol Saos Sambal Handmade Fresh',
    pairing: 'Rebusan Cabai Segar & Minyak Aromatik',
    note: 'Celupkan ke saos sambal handmade yang direbus air secara bertahap bersama bawang putih dan minyak aromatik untuk sensasi pedas gurih yang mantap.',
    icon: 'soup_kitchen',
  },
  {
    id: 'ritual-3',
    step: 'Langkah 3',
    title: 'Kerenyahan Terjaga 4-6 Jam',
    pairing: 'Tahan Krispi atau Hangatkan 2-3 Menit',
    note: 'Kerenyahan double kulit bertahan 4-6 jam setelah penggorengan. Jika ingin disantap nanti, hangatkan di air fryer suhu 170°C selama 2-3 menit agar keju kembali lumer.',
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
