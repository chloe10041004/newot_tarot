const quotes = [
  {
    text: "혼자 읽는 책이 배추라면, 같이 읽는 책은 김치다.",
    page: "p.194",
  },
  {
    text: "배스킨라빈스에 '베리 베리 스트로베리'가 있다면, 책방에는 '베리 베리 스몰 레볼루션'이 있었다.",
    page: "들어가는 글",
  },
  {
    text: "열심히 책을 읽고 이야기 나누고 각자 정수기 앞으로 가자.",
    page: "p.217",
  },
];

const tags = ["독서 에세이", "한국 에세이", "서점 이야기"];

export function AboutBook() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-lavender-ink md:text-4xl">
              책 소개
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-body">
              <p>
                &ldquo;그놈의 재고, 재고, 재고!&rdquo;를 외치는 한 책방지기의
                시트콤보다 웃기고 다큐보다 리얼한 독서모임 분투기. 대구
                동네책방 &apos;하고&apos;를 10년째 꾸리는 이수영 책방지기가
                월화수목금토일, 쉼 없이 굴려온 독서모임의 좌충우돌 이야기를
                담았습니다.
              </p>
              <p>
                완벽하지 않으면 어떻고, 준비가 덜 되었어도 &apos;일단&apos;
                해보자는 마음으로 시작한 모임. 각자 고립된 점으로 흩어져
                있던 사람들이 독서모임에서 만나 서로 연결되고, 하나의 입체로
                확장되어 가는 마법 — 그 작은 혁명의 기록입니다.
              </p>
              <p>
                이 책은 독서모임 운영 노하우를 담은 실용서도, 책을 좋아하는
                사람들의 따뜻한 미담집도 아닙니다. 함께 책을 읽은 사람들이
                자신의 경계를 넘어 더 넓은 세계로 나아간 작은 혁명에 관한
                이야기입니다.
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-link-bg-soft px-3 py-1 text-sm text-lavender-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-hairline bg-canvas-soft p-6">
              <h3 className="mb-4 text-lg font-semibold text-lavender-ink">
                도서 정보
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-hairline pb-3">
                  <dt className="text-mute">저자</dt>
                  <dd className="font-medium text-ink">이수영</dd>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <dt className="text-mute">출판사</dt>
                  <dd className="font-medium text-ink">메멘토</dd>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <dt className="text-mute">발행일</dt>
                  <dd className="font-medium text-ink">2026.06.15</dd>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <dt className="text-mute">쪽수</dt>
                  <dd className="font-medium text-ink">232쪽</dd>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <dt className="text-mute">크기</dt>
                  <dd className="font-medium text-ink">128×200mm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mute">ISBN</dt>
                  <dd className="font-medium text-ink">9791192099576</dd>
                </div>
              </dl>
            </div>

            <ul className="mt-6 space-y-4">
              {quotes.map((quote) => (
                <li
                  key={quote.page}
                  className="border-l-4 border-terracotta pl-4"
                >
                  <blockquote className="text-sm italic leading-relaxed text-body">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  <cite className="mt-1 block text-xs not-italic text-mute">
                    — {quote.page}
                  </cite>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
