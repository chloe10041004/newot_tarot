import Link from "next/link";

const stats = [
  { value: "12,400+", label: "회원" },
  { value: "48,000+", label: "게시글" },
  { value: "320+", label: "오프라인 모임" },
];

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas-soft px-4 py-1.5 text-sm text-body">
          <span className="inline-block h-2 w-2 rounded-full bg-link" aria-hidden />
          애플 제품을 사랑하는 사람들의 모임
        </p>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.1] md:tracking-[-2.4px]">
          같은 애플 팬들과
          <br />
          <span className="bg-gradient-to-r from-[var(--gradient-develop-start)] via-[var(--violet)] to-[var(--gradient-preview-end)] bg-clip-text text-transparent">
            연결되는 커뮤니티
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-body">
          iPhone, Mac, iPad, Apple Watch까지 — 제품 정보 공유부터 오프라인
          모임, 중고 거래까지. 애사모에서 함께 이야기하세요.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#join"
            className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-base font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            무료로 가입하기
          </Link>
          <Link
            href="#community"
            className="inline-flex h-12 items-center rounded-full px-6 text-base font-medium text-ink transition-colors hover:bg-canvas-soft"
          >
            커뮤니티 둘러보기 →
          </Link>
        </div>

        <dl className="mx-auto grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-mute">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
