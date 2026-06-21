import { bookTalkEvents } from "@/data/bookTalk";

const statusStyles = {
  모집중: "bg-terracotta text-on-primary",
  예정: "bg-brand-lavender/40 text-lavender-ink",
  마감: "bg-hairline text-mute",
};

export function BookTalkSection() {
  return (
    <section id="booktalk" className="bg-surface-dark px-6 py-20 text-on-primary md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            북토크 소식
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            작가와 직접 만나 이야기를 나눌 수 있는 자리입니다.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {bookTalkEvents.map((event) => (
            <li
              key={event.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <time className="text-sm font-medium text-white/60">
                  {event.date}
                </time>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[event.status]}`}
                >
                  {event.status}
                </span>
              </div>
              <h3 className="mb-4 flex-1 text-lg font-semibold leading-snug">
                {event.title}
              </h3>
              <p className="mb-6 text-sm text-white/70">{event.location}</p>
              <a
                href={event.href}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 text-sm font-medium transition-colors hover:bg-white/10"
              >
                자세히 보기
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
