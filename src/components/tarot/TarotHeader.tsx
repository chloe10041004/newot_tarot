"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function TarotHeader() {
  const searchParams = useSearchParams();
  const isLenormand = searchParams.get("class") === "lenormand";
  const ctaLabel = isLenormand ? "무료 수강 신청" : "수강 신청";

  return (
    <header className="tarot-header-soft sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/tarot" className="flex items-center gap-3">
          <Image
            src="/newit/logo.png"
            alt="NEWIT 뉴잇"
            width={120}
            height={48}
            className="h-9 w-auto object-contain opacity-95"
            priority
          />
          <span className="hidden text-xs tracking-wide text-[var(--tarot-muted)] sm:inline">
            NEW START, NEW YOU
          </span>
        </Link>
        <a
          href="#enroll"
          className="tarot-btn-primary rounded-full px-5 py-2.5 text-sm"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
