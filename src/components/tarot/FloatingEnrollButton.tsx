"use client";

import { useEffect, useState } from "react";
import type { TarotClassProduct } from "@/data/tarotClasses";

type Props = {
  product: TarotClassProduct;
};

export function FloatingEnrollButton({ product }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("enroll");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [product.id]);

  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({
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
        onClick={scrollToEnroll}
        className="tarot-btn-primary flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-2xl px-5 py-3 shadow-lg"
        aria-label="수강 신청 섹션으로 이동"
      >
        <span className="text-left">
          <span className="block text-xs opacity-80">{product.tabLabel}</span>
          <span className="block text-sm font-semibold">
            {product.classInfo.price}
          </span>
        </span>
        <span className="shrink-0 text-sm font-semibold">신청 →</span>
      </button>
    </div>
  );
}
