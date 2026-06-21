import Link from "next/link";

const footerLinks = {
  커뮤니티: [
    { label: "게시판", href: "#community" },
    { label: "모임", href: "#events" },
    { label: "중고거래", href: "#" },
  ],
  정보: [
    { label: "소개", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "운영 가이드", href: "#" },
  ],
  법적: [
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
    { label: "문의하기", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-3 text-lg font-semibold text-ink">애사모</p>
            <p className="text-sm leading-relaxed text-body">
              애플 제품을 사랑하는
              <br />
              사람들의 커뮤니티
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-sm font-medium text-ink">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-sm text-mute">
            © {new Date().getFullYear()} 애사모. Apple Inc.와 무관한 팬
            커뮤니티입니다.
          </p>
          <p className="text-xs text-mute">
            Design:{" "}
            <a
              href="https://getdesign.md/vercel/design-md"
              className="text-link hover:text-link-deep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel DESIGN.md
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
