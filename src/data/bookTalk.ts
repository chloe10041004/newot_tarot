export type BookTalkEvent = {
  date: string;
  title: string;
  location: string;
  status: "모집중" | "예정" | "마감";
  href: string;
};

export const bookTalkEvents: BookTalkEvent[] = [
  {
    date: "2026.06.15",
    title: "『선을 넘는 북클럽』 출간 기념 북토크",
    location: "대구 하고책방",
    status: "모집중",
    href: "#",
  },
  {
    date: "2026.06.22",
    title: "서울국제도서전 사인회",
    location: "COEX",
    status: "예정",
    href: "#",
  },
  {
    date: "2026.07.05",
    title: "독서모임 운영자와의 대화",
    location: "온라인 Zoom",
    status: "예정",
    href: "#",
  },
];
