const categories = [
  { name: "iPhone", posts: "12,340", emoji: "📱" },
  { name: "Mac", posts: "8,920", emoji: "💻" },
  { name: "iPad", posts: "4,560", emoji: "📲" },
  { name: "Apple Watch", posts: "3,210", emoji: "⌚" },
  { name: "AirPods", posts: "2,890", emoji: "🎧" },
  { name: "액세서리", posts: "5,670", emoji: "🔌" },
];

const recentPosts = [
  {
    category: "iPhone",
    title: "iPhone 17 Pro 실사용 2주 후기 — 카메라가 정말 달라졌어요",
    author: "맥북러버",
    replies: 47,
    time: "2시간 전",
  },
  {
    category: "Mac",
    title: "M4 MacBook Air vs Pro, 개발자 기준으로 뭐가 나을까요?",
    author: "코딩하는사과",
    replies: 89,
    time: "5시간 전",
  },
  {
    category: "모임",
    title: "[서울] 6월 WWDC 키노트 같이 보기 모임 모집합니다",
    author: "애사모운영",
    replies: 23,
    time: "1일 전",
  },
];

export function Community() {
  return (
    <section id="community" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              활발한 커뮤니티
            </h2>
            <p className="max-w-xl text-lg text-body">
              카테고리별 게시판에서 관심 있는 주제로 대화를 시작하세요.
            </p>
          </div>
          <p className="text-sm text-mute">최근 24시간 활동 기준</p>
        </div>

        <ul className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <li key={cat.name}>
              <a
                href="#"
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-5 transition-all hover:border-link/25 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-canvas-soft-2 text-xl transition-colors group-hover:bg-link-bg-soft"
                  aria-hidden
                >
                  {cat.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink">{cat.name}</p>
                  <p className="mt-0.5 text-sm text-mute">{cat.posts} 게시글</p>
                </div>
                <svg
                  className="h-4 w-4 shrink-0 text-mute opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="rounded-lg border border-hairline">
          <div className="border-b border-hairline px-6 py-4">
            <h3 className="text-sm font-medium text-ink">인기 게시글</h3>
          </div>
          <ul>
            {recentPosts.map((post, i) => (
              <li
                key={post.title}
                className={`flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                  i < recentPosts.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <span className="mb-1.5 inline-block rounded-full bg-canvas-soft-2 px-2.5 py-0.5 text-xs text-body">
                    {post.category}
                  </span>
                  <p className="truncate font-medium text-ink">{post.title}</p>
                  <p className="mt-1 text-sm text-mute">
                    {post.author} · {post.time}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-mute">
                  댓글 {post.replies}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
