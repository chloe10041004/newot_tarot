import Image from "next/image";

export function AuthorSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-sm shadow-lg lg:mx-0">
            <Image
              src="/book/author-photo.png"
              alt="이수영 작가 — 전시장에서 작품을 바라보는 모습"
              fill
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-terracotta">
              저자 소개
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-lavender-ink md:text-4xl">
              이수영
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-body">
              <p>
                대구 동네책방 <strong className="text-lavender-ink">하고</strong>{" "}
                대표. 대학에서 심리학을 전공했다. 책과 가까워지고 싶어 하는
                사람들에게 끈질기게 &ldquo;독서모임 해보세요&rdquo;라고 권하는
                &apos;맑눈광&apos; 책방지기.
              </p>
              <p>
                만년 애서가 지망생들이 진짜 책을 사랑하는 사람이 되도록 돕는
                &apos;바지런한 서적상&apos;이 되겠다고 마음먹고 독서모임을
                만들었다. 잡독 모임을 시작으로 10년째 월화수목금토일 쉬지 않고
                독서모임을 이어오고 있다.
              </p>
              <p>
                그림책 『마음은 어디에』(그림책공작소, 2024)에 글을 썼다.
              </p>
            </div>
            <a
              href="https://www.instagram.com/hagobooks/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas-soft px-5 py-2.5 text-sm font-medium text-lavender-ink transition-colors hover:bg-link-bg-soft"
            >
              @hagobooks 인스타그램 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
