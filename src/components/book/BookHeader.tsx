import Link from "next/link";

const navLinks = [
  { href: "#story", label: "이야기" },
  { href: "#about", label: "책 소개" },
  { href: "#booktalk", label: "북토크" },
  { href: "#qa", label: "Q&A" },
];

export function BookHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="책 랜딩 내비게이션"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-lavender-ink md:text-lg"
        >
          선을 넘는 북클럽
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-body transition-colors hover:text-lavender-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#purchase"
          className="inline-flex h-9 items-center rounded-full bg-terracotta px-4 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
        >
          책 구매하기
        </Link>
      </nav>
    </header>
  );
}
