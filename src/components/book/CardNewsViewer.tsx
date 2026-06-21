"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { StoryCard } from "@/data/storyCards";

type CardNewsViewerProps = {
  cards: StoryCard[];
};

const SWIPE_THRESHOLD = 50;

export function CardNewsViewer({ cards }: CardNewsViewerProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(Math.max(0, Math.min(cards.length - 1, nextIndex)));
    },
    [cards.length],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goTo(index - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
    touchStartX.current = null;
  };

  const card = cards[index];

  return (
    <div className="mx-auto w-full max-w-md">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-canvas shadow-lg select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={card.id}
          src={card.image}
          alt={card.headline}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 448px"
          priority={index === 0}
          draggable={false}
        />

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="이전 카드"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/90 text-lavender-ink shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === cards.length - 1}
          aria-label="다음 카드"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-canvas/90 text-lavender-ink shadow-md transition-opacity disabled:pointer-events-none disabled:opacity-0"
        >
          ›
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-12">
          <p className="text-sm font-medium text-white/90">
            {index + 1} / {cards.length}
          </p>
        </div>
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="카드뉴스 페이지"
      >
        {cards.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${i + 1}번째 카드: ${item.headline}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-lavender-ink"
                : "w-2 bg-hairline-strong hover:bg-mute"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-mute">
        좌우로 스와이프하거나 버튼을 눌러 넘겨보세요
      </p>

      <div className="mt-4 rounded-xl border border-hairline bg-canvas/80 p-4 text-center">
        <p className="font-semibold leading-snug text-lavender-ink">
          {card.headline}
        </p>
        {card.subtext && (
          <p className="mt-2 text-sm leading-relaxed text-body">
            {card.subtext}
          </p>
        )}
      </div>
    </div>
  );
}
