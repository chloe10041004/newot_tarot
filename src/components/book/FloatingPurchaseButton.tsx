"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BOOK_COVER_IMAGE } from "@/data/bookMeta";
import { BOOK_PRICE } from "@/data/purchaseLinks";

export function FloatingPurchaseButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("purchase");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const scrollToPurchase = () => {
    document.getElementById("purchase")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={scrollToPurchase}
        className="group flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-2xl border border-hairline/80 bg-canvas/95 py-2 pl-2 pr-3 shadow-[0_8px_32px_rgba(107,91,149,0.12)] backdrop-blur-md transition-shadow hover:shadow-[0_12px_40px_rgba(107,91,149,0.18)]"
        aria-label="상단 구매 버튼으로 이동"
      >
        <div className="relative h-14 w-10 shrink-0 overflow-hidden rounded-md shadow-sm">
          <Image
            src={BOOK_COVER_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-xs text-mute">선을 넘는 북클럽</p>
          <p className="text-sm font-semibold text-lavender-ink">{BOOK_PRICE}</p>
        </div>
        <span className="shrink-0 rounded-xl bg-terracotta px-3.5 py-2 text-xs font-semibold text-on-primary transition-colors group-hover:bg-primary-active">
          구매
        </span>
      </button>
    </div>
  );
}
