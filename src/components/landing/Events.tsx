const events = [
  {
    date: "6월 10일",
    title: "WWDC 2026 키노트 같이 보기",
    location: "서울 강남",
    spots: "잔여 8석",
    type: "온·오프라인",
  },
  {
    date: "6월 22일",
    title: "애플 파크 가상 투어 & Q&A",
    location: "온라인 Zoom",
    spots: "무제한",
    type: "온라인",
  },
  {
    date: "7월 5일",
    title: "여름 야외 포토 워크숍 — iPhone으로 담는 풍경",
    location: "부산 해운대",
    spots: "잔여 15석",
    type: "오프라인",
  },
];

export function Events() {
  return (
    <section id="events" className="bg-primary px-6 py-24 text-on-primary md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            다가오는 모임
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            화면 너머가 아닌, 직접 만나서 이야기하는 애사모만의 오프라인·온라인
            이벤트
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <li
              key={event.title}
              className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="mb-3 text-sm font-medium text-white/60">
                {event.date}
              </p>
              <h3 className="mb-4 flex-1 text-lg font-semibold leading-snug">
                {event.title}
              </h3>
              <dl className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <dt>장소</dt>
                  <dd className="text-white/90">{event.location}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>형태</dt>
                  <dd className="text-white/90">{event.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>모집</dt>
                  <dd className="font-medium text-cyan">{event.spots}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
