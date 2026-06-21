import Image from "next/image";
import Link from "next/link";

export function TarotHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(197,160,89,0.15)] bg-[#0f1a2e]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/tarot" className="flex items-center gap-3">
          <Image
            src="/newit/logo.png"
            alt="NEWIT 뉴잇"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="hidden text-sm text-[var(--tarot-muted)] sm:inline">
            NEW START, NEW YOU
          </span>
        </Link>
        <a
          href="#enroll"
          className="tarot-btn-primary rounded-full px-4 py-2 text-sm"
        >
          수강 신청
        </a>
      </div>
    </header>
  );
}
