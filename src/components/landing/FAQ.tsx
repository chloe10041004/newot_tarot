const faqs = [
  {
    q: "애사모는 무료인가요?",
    a: "네, 가입과 기본 커뮤니티 이용은 완전 무료입니다. 일부 프리미엄 모임이나 이벤트는 별도 참가비가 있을 수 있습니다.",
  },
  {
    q: "애플 제품이 없어도 가입할 수 있나요?",
    a: "물론입니다. 애플에 관심이 있거나 구매를 고민 중인 분들도 환영합니다. 다만 상업적 광고 목적의 가입은 제한됩니다.",
  },
  {
    q: "중고 거래는 어떻게 하나요?",
    a: "전용 거래 게시판에서 회원 간 직거래 또는 안전결제를 이용할 수 있습니다. 거래 전 상대방 프로필과 거래 후기를 꼭 확인해 주세요.",
  },
  {
    q: "오프라인 모임은 어디서 하나요?",
    a: "서울, 부산, 대구, 인천 등 전국 주요 도시에서 정기 모임이 열립니다. 지역 모임 개설도 회원 누구나 신청할 수 있습니다.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-canvas-soft px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          자주 묻는 질문
        </h2>

        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-lg border border-hairline bg-canvas p-6"
            >
              <dt className="mb-2 font-medium text-ink">{faq.q}</dt>
              <dd className="text-sm leading-relaxed text-body">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
