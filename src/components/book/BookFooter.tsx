import Image from "next/image";
import Link from "next/link";
import { otherBooks } from "@/data/otherBooks";

const HAGO_INSTAGRAM_URL = "https://www.instagram.com/hagobooks/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function BookFooter() {
  return (
    <footer className="border-t border-hairline bg-canvas px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="mb-4 text-lg font-semibold text-lavender-ink">
            작가의 다른 책
          </p>
          <ul className="max-w-md space-y-3">
            {otherBooks.map((book) => (
              <li key={book.title}>
                <a
                  href={book.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 rounded-lg border border-hairline bg-canvas-soft p-3 transition-colors hover:border-lavender-ink/20 hover:bg-link-bg-soft/30"
                >
                  <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded shadow-sm">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} 표지`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-lavender-ink group-hover:text-terracotta">
                      {book.title}
                    </p>
                    <p className="mt-0.5 text-xs text-mute">{book.credits}</p>
                    <p className="mt-1 text-xs text-terracotta">
                      {book.price} · 예스24 →
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 sm:flex-row">
          <Link
            href="/tarot"
            className="text-xs font-medium text-terracotta transition-colors hover:text-lavender-ink"
          >
            뉴잇 타로 클래스 →
          </Link>
          <a
            href={HAGO_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="하고책방 인스타그램 @hagobooks"
            className="inline-flex items-center gap-1.5 text-xs text-mute transition-colors hover:text-lavender-ink"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>@hagobooks</span>
          </a>

          <p className="text-xs text-mute">
            아무것도 아니지만 무엇이든 될 수 있는
          </p>
        </div>
      </div>
    </footer>
  );
}
