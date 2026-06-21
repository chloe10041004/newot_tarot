export type StoryCard = {
  id: number;
  image: string;
  headline: string;
  subtext?: string;
};

export const storyCards: StoryCard[] = [
  {
    id: 1,
    image: "/book/card-news/01.jpg",
    headline: "사놓고 안 읽은 책, 지금 몇 권쯤 쌓여 있나요?",
    subtext: "나만 그런 게 아닙니다. 생각보다 아주 많은 사람들이 책을 사기만 하고 읽지 않아요.",
  },
  {
    id: 2,
    image: "/book/card-news/02.jpg",
    headline: "일본어로 '쓰도쿠(積ん読)'",
    subtext: "'쌓다'와 '읽다'를 합친 말. 책을 사서 쌓아두기만 하는 것을 뜻합니다.",
  },
  {
    id: 3,
    image: "/book/card-news/03.jpg",
    headline: "이번 주말엔 꼭 읽어야지.",
    subtext: "늘 다짐하지만, 막상 주말이 오면 손에 잡히는 건 스마트폰뿐. 책은 그 자리에 그대로.",
  },
  {
    id: 4,
    image: "/book/card-news/04.jpg",
    headline: "혼자만의 의지로 바뀌려 하면 작심삼일로 끝납니다.",
    subtext: "그래서 필요한 건 의지가 아니라, 환경입니다.",
  },
];

export const solutionCards: StoryCard[] = [
  {
    id: 5,
    image: "/book/card-news/05.jpg",
    headline: "스스로에게 책 읽는 환경을 만들어주세요.",
    subtext: "같이 시간, 이야기를 나눌 공간. 같은 책을 읽고, 다른 시선을 나눌 사람들.",
  },
  {
    id: 6,
    image: "/book/card-news/06.jpg",
    headline: "혼자선 덮어버린 책도, 함께라면 끝까지.",
    subtext: "다 읽어야 할 이유가 생기고, 나눌 이야기가 생기고, '읽는 재미'가 생깁니다.",
  },
  {
    id: 7,
    image: "/book/card-news/07.jpg",
    headline: "가까운 곳에서 함께 읽을 사람을 찾아보세요.",
    subtext: "'우리 이 책 같이 읽어볼래?' 한마디면 시작입니다.",
  },
];

export const cardNewsCards: StoryCard[] = [
  ...storyCards,
  ...solutionCards,
  {
    id: 8,
    image: "/book/card-news/08.jpg",
    headline: "함께 읽으면 어떤 일이 벌어질까?",
    subtext: "좌충우돌 독서모임 이야기, 『선을 넘는 북클럽』을 만나보세요.",
  },
];
