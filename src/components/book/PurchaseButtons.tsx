import Link from "next/link";
import { BOOK_PRICE, purchaseLinks } from "@/data/purchaseLinks";

type PurchaseButtonsProps = {
  variant?: "hero" | "section";
};

export function PurchaseButtons({ variant = "hero" }: PurchaseButtonsProps) {
  const isSection = variant === "section";

  return (
    <div
      className={
        isSection
          ? "flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          : "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      }
    >
      {purchaseLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${
            isSection ? "w-full sm:w-auto sm:min-w-[140px]" : "flex-1 sm:flex-none"
          } ${link.color}`}
        >
          {link.name}에서 구매
        </a>
      ))}
      {!isSection && (
        <p className="w-full text-sm text-mute">
          판매가 {BOOK_PRICE} · 무료배송
        </p>
      )}
    </div>
  );
}
