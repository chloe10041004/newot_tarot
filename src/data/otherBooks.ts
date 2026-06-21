export type OtherBook = {
  title: string;
  credits: string;
  publisher: string;
  publishedAt: string;
  price: string;
  badge?: string;
  description: string;
  coverImage: string;
  purchaseUrl: string;
};

export const otherBooks: OtherBook[] = [
  {
    title: "마음은 어디에",
    credits: "이수영 글 · 김선진 그림",
    publisher: "그림책공작소",
    publishedAt: "2024.07.07",
    price: "16,200원",
    badge: "2024 볼로냐 올해의 일러스트레이터 선정작",
    description:
      "마음이 허전한 동수가 이웃들을 만나며 마음을 찾아가는 감정 그림책.",
    coverImage: "https://image.yes24.com/goods/128182194/XL",
    purchaseUrl: "https://www.yes24.com/product/goods/128182194",
  },
];
