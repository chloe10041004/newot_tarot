import Image from "next/image";
import { BOOK_COVER_IMAGE } from "@/data/bookMeta";
import { BOOK_PRICE } from "@/data/purchaseLinks";
import { PurchaseButtons } from "./PurchaseButtons";

const COVER_IMAGE = BOOK_COVER_IMAGE;

export function BookHero() {
  return (
    <section className="book-stripe-bg relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="hero-text-panel max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/80 px-4 py-1.5 text-sm text-body">
              <span
                className="inline-block h-2 w-2 rounded-full bg-terracotta"
                aria-hidden
              />
              이수영 · 메멘토 · 2026.06.15 출간
            </p>

            <h1 className="mb-4 text-2xl font-semibold tracking-tight text-lavender-ink md:text-3xl lg:text-4xl">
              선을 넘는 북클럽
            </h1>

            <p className="mb-2 text-lg font-medium text-lavender-ink md:text-xl">
              아무것도 아니지만 무엇이든 될 수 있는
            </p>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-body">
              대구 동네책방 &apos;하고&apos;에서 10년째 굴려온 독서모임 분투기.
              시트콤보다 웃기고, 다큐보다 리얼한 좌충우돌 북클럽 이야기.
            </p>

            <p className="mb-6 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-semibold text-lavender-ink">
                {BOOK_PRICE}
              </span>
              <span className="text-base text-mute line-through">17,000원</span>
            </p>

            <div id="purchase" className="scroll-mt-24">
              <PurchaseButtons />
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="book-pill absolute -right-4 -top-4 h-24 w-24 bg-dusty-pink/40 md:h-32 md:w-32" />
            <div className="book-pill absolute -bottom-4 -left-4 h-20 w-20 bg-brand-peach/40 md:h-28 md:w-28" />
            <Image
              src={COVER_IMAGE}
              alt="『선을 넘는 북클럽』 표지 — 이수영 저"
              width={400}
              height={560}
              priority
              sizes="(max-width: 1024px) 80vw, 400px"
              className="relative z-10 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
