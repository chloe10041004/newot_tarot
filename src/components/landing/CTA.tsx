import Link from "next/link";

export function CTA() {
  return (
    <section id="join" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          지금 애사모에 합류하세요
        </h2>
        <p className="mb-10 text-lg text-body">
          가입은 1분이면 충분합니다. 애플을 사랑하는 12,000명의 팬이 기다리고
          있어요.
        </p>

        <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일 주소"
            className="h-12 flex-1 rounded-sm border border-hairline bg-canvas px-4 text-sm text-ink placeholder:text-mute focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
          />
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            가입하기
          </button>
        </form>

        <p className="mt-4 text-xs text-mute">
          가입 시{" "}
          <Link href="#" className="underline hover:text-body">
            이용약관
          </Link>
          과{" "}
          <Link href="#" className="underline hover:text-body">
            개인정보처리방침
          </Link>
          에 동의하게 됩니다.
        </p>
      </div>
    </section>
  );
}
