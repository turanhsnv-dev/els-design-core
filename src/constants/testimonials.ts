export type Review = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const UNSPLASH_AVATAR = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&q=80`;

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Baş direktor, TechFlow",
    text: "Elza xaotik idarə panelimizi əsərə çevirdi. İstifadəçi saxlanması cəmi bir ay ərzində 40% artdı.",
    avatar: UNSPLASH_AVATAR("photo-1494790108377-be9c29b29330"),
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Təsisçi, StartUp X",
    text: "Hərəkət dizaynına dair anlayışı brendimizi fərqləndirdi. Detallara qüsursuz, dünya səviyyəsində diqqət.",
    avatar: UNSPLASH_AVATAR("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Məhsul meneceri",
    text: "Çoxlu dizaynerlərlə işləmişəm, amma Elza tamamilə başqa səviyyədədir. O, developerlərin dilini danışır.",
    avatar: UNSPLASH_AVATAR("photo-1573496359142-b8d87734a5a2"),
  },
  {
    id: 4,
    name: "David Smith",
    role: "Marketinq direktoru",
    text: "Yaratdığı brendinq dəsti zamansızdır. Hər yerdə istifadə edirik. Mütləq tövsiyə olunur!",
    avatar: UNSPLASH_AVATAR("photo-1500648767791-00dcc994a43e"),
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Texniki direktor, FinNova",
    text: "Sürətli, dəqiq və inanılmaz dərəcədə yaradıcı. Dizayn etdiyi dark mode UI göz üçün saf zövqə çevrilir.",
    avatar: UNSPLASH_AVATAR("photo-1438761681033-6461ffad8d80"),
  },
];
