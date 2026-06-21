const highlights = [
  {
    title: "독서모임 분투기",
    description:
      "시트콤보다 웃기고, 다큐보다 리얼한 좌충우돌 이야기. '사장도 나요, 알바도 나'였던 자영업 책방지기의 땀내 나는 성장기.",
    color: "bg-dusty-pink/40",
  },
  {
    title: "독서모임 뷔페",
    description:
      "잡독, 원데이 북클럽, 웬즈데이 소사이어티, 벽돌책 읽기, 오디오북, 자영업 언니들 모임 — 요상하고 다채로운 북클럽 메뉴판.",
    color: "bg-brand-peach/30",
  },
  {
    title: "베리 베리 스몰 레볼루션",
    description:
      "책방 크기만큼 작았을 뿐, 분명 혁명이었다. 함께 책을 읽은 사람들이 경계를 넘어 더 넓은 세계로 나아간 작은 변화.",
    color: "bg-brand-lavender/30",
  },
];

export function Highlights() {
  return (
    <section className="book-stripe-h bg-canvas-soft-2 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-lavender-ink md:text-4xl">
            이 책의 세 가지 포인트
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <li
              key={item.title}
              className={`book-pill flex flex-col rounded-2xl border border-hairline p-8 ${item.color}`}
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-lavender-ink text-lg font-bold text-on-primary">
                {i + 1}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-lavender-ink">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
