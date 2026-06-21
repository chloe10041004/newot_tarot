import Link from "next/link";

const navLinks = [
  { href: "#features", label: "소개" },
  { href: "#community", label: "커뮤니티" },
  { href: "#events", label: "모임" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="메인 내비게이션"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink"
        >
          애사모
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-body transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#join"
            className="hidden rounded-sm px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-canvas-soft sm:inline-flex"
          >
            로그인
          </Link>
          <Link
            href="#join"
            className="inline-flex h-7 items-center rounded-sm bg-primary px-3 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            가입하기
          </Link>
        </div>
      </nav>
    </header>
  );
}
