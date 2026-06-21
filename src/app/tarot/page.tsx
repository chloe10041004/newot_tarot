import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Suspense } from "react";
import { TarotHeader } from "@/components/tarot/TarotHeader";
import { TarotPageContent } from "@/components/tarot/TarotPageContent";
import "./tarot.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: "뉴잇 타로 클래스 | NEWIT Academy",
  description:
    "뉴잇아카데미 썸머나이트 타로 클래스. 화요 힐링반 4주 과정과 레노먼드 원데이 무료 클래스. 대구 뉴잇(소율타로사주) · Zoom 동시 송출.",
  openGraph: {
    title: "뉴잇 타로 클래스 | NEWIT Academy",
    description:
      "유튜브 제너럴 리딩 대신, 내 삶에 맞는 타로·레노먼드 리딩을 배우세요.",
    images: [{ url: "/tarot/hero-tuesday.jpg", width: 1200, height: 900 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function TarotPage() {
  return (
    <div
      className={`tarot-page ${notoSansKr.variable} flex min-h-screen w-full flex-col font-[family-name:var(--font-noto-sans-kr),system-ui,sans-serif] text-[#f5f0e8]`}
    >
      <TarotHeader />
      <main>
        <Suspense fallback={<div className="px-6 py-20 text-center">로딩 중…</div>}>
          <TarotPageContent />
        </Suspense>
      </main>
    </div>
  );
}
