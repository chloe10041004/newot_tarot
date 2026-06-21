import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { BookHeader } from "@/components/book/BookHeader";
import { BookHero } from "@/components/book/BookHero";
import { CardNewsSection } from "@/components/book/CardNewsSection";
import { AboutBook } from "@/components/book/AboutBook";
import { Highlights } from "@/components/book/Highlights";
import { AuthorSection } from "@/components/book/AuthorSection";
import { BookTalkSection } from "@/components/book/BookTalkSection";
import { FloatingPurchaseButton } from "@/components/book/FloatingPurchaseButton";
import { QuestionBoard } from "@/components/book/QuestionBoard";
import { BookFooter } from "@/components/book/BookFooter";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "선을 넘는 북클럽 | 이수영 — 독서모임 분투기",
  description:
    "대구 동네책방 '하고'에서 10년째 굴려온 독서모임 이야기. 아무것도 아니지만 무엇이든 될 수 있는 — 이수영 저, 메멘토.",
  openGraph: {
    title: "선을 넘는 북클럽 | 이수영",
    description:
      "시트콤보다 웃기고, 다큐보다 리얼한 독서모임 분투기. 함께 읽으면 어떤 일이 벌어질까?",
    images: [{ url: "/book/cover-hero.png", width: 800, height: 600 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div
      className={`${notoSansKr.variable} font-[family-name:var(--font-noto-sans-kr),system-ui,sans-serif]`}
    >
      <BookHeader />
      <main>
        <BookHero />
        <CardNewsSection />
        <AboutBook />
        <Highlights />
        <AuthorSection />
        <BookTalkSection />
        <QuestionBoard />
      </main>
      <FloatingPurchaseButton />
      <BookFooter />
    </div>
  );
}
