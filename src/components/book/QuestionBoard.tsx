"use client";

import { useCallback, useEffect, useState } from "react";

export type QuestionItem = {
  id: number;
  authorName: string;
  content: string;
  reply: string | null;
  createdAt: string;
  repliedAt: string | null;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function parseJsonResponse(res: Response): Promise<{ error?: string }> {
  const text = await res.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as { error?: string };
  } catch {
    return {};
  }
}

export function QuestionBoard() {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [authorMode, setAuthorMode] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [replyDrafts, setReplyDrafts] = useState<Record<number, string>>({});
  const [replyingId, setReplyingId] = useState<number | null>(null);

  const loadQuestions = useCallback(async () => {
    try {
      const res = await fetch("/api/questions", { cache: "no-store" });
      if (res.ok) setQuestions(await res.json());
    } catch {
      setError("질문 목록을 불러오지 못했습니다.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    const res = await fetch("/api/questions", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ authorName, content }),
    });

    const data = await parseJsonResponse(res);
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "질문 등록에 실패했습니다.");
      return;
    }

    setAuthorName("");
    setContent("");
    setSuccess("질문이 등록되었습니다. 작가님의 답변을 기다려 주세요.");
    await loadQuestions();
  };

  const handleAuthorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim()) {
      setAuthenticated(true);
      setAuthorMode(false);
    }
  };

  const handleReply = async (questionId: number) => {
    const reply = replyDrafts[questionId]?.trim();
    if (!reply) return;

    setReplyingId(questionId);
    const res = await fetch(`/api/questions/${questionId}/reply`, {
      method: "PATCH",
      cache: "no-store",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ reply, passcode }),
    });

    const data = await parseJsonResponse(res);
    setReplyingId(null);

    if (!res.ok) {
      if (res.status === 401) {
        setAuthenticated(false);
        setPasscode("");
      }
      setError(data.error ?? "답변 등록에 실패했습니다.");
      return;
    }

    setReplyDrafts((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setError("");
    await loadQuestions();
  };

  return (
    <section id="qa" className="bg-canvas-soft px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-terracotta">
            작가가 답해드립니다
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-lavender-ink md:text-4xl">
            독서모임 Q&A
          </h2>
          <p className="mx-auto max-w-xl text-lg text-body">
            궁금한 점을 남겨 주세요. 이수영 작가가 직접 답변합니다.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-10 rounded-2xl border border-hairline bg-canvas p-6"
        >
          <h3 className="mb-4 text-lg font-semibold text-lavender-ink">
            질문 남기기
          </h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="qa-name" className="mb-1.5 block text-sm text-body">
                이름 (또는 닉네임)
              </label>
              <input
                id="qa-name"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                maxLength={20}
                required
                placeholder="예: 책방단골"
                className="h-11 w-full rounded-lg border border-hairline bg-canvas-soft px-4 text-sm text-ink placeholder:text-mute focus:border-lavender-ink focus:outline-none focus:ring-1 focus:ring-lavender-ink"
              />
            </div>
            <div>
              <label htmlFor="qa-content" className="mb-1.5 block text-sm text-body">
                질문
              </label>
              <textarea
                id="qa-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={500}
                required
                rows={4}
                placeholder="독서모임에 대해 궁금한 점을 자유롭게 적어 주세요."
                className="w-full resize-none rounded-lg border border-hairline bg-canvas-soft px-4 py-3 text-sm text-ink placeholder:text-mute focus:border-lavender-ink focus:outline-none focus:ring-1 focus:ring-lavender-ink"
              />
            </div>
            {error && (
              <p className="text-sm text-brand-pink" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-lavender-ink" role="status">
                {success}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 items-center rounded-full bg-lavender-ink px-6 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "등록 중…" : "질문 등록하기"}
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-lavender-ink">
            질문과 답변
          </h3>

          {loading ? (
            <p className="text-sm text-mute">불러오는 중…</p>
          ) : questions.length === 0 ? (
            <p className="rounded-xl border border-dashed border-hairline bg-canvas p-8 text-center text-sm text-mute">
              아직 등록된 질문이 없습니다. 첫 질문을 남겨 보세요.
            </p>
          ) : (
            questions.map((q) => (
              <article
                key={q.id}
                className="overflow-hidden rounded-xl border border-hairline bg-canvas"
              >
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-lavender-ink">
                      {q.authorName}
                    </span>
                    <time className="text-xs text-mute">
                      {formatDate(q.createdAt)}
                    </time>
                  </div>
                  <p className="text-sm leading-relaxed text-body">{q.content}</p>
                </div>

                {q.reply ? (
                  <div className="border-t border-hairline bg-link-bg-soft/50 px-5 py-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
                      이수영 작가
                    </p>
                    <p className="text-sm leading-relaxed text-body">{q.reply}</p>
                    {q.repliedAt && (
                      <time className="mt-2 block text-xs text-mute">
                        {formatDate(q.repliedAt)}
                      </time>
                    )}
                  </div>
                ) : (
                  <div className="border-t border-hairline bg-canvas-soft px-5 py-3">
                    <p className="text-xs text-mute">답변 준비 중입니다</p>
                    {authenticated && (
                      <div className="mt-3 space-y-2">
                        <textarea
                          value={replyDrafts[q.id] ?? ""}
                          onChange={(e) =>
                            setReplyDrafts((prev) => ({
                              ...prev,
                              [q.id]: e.target.value,
                            }))
                          }
                          rows={3}
                          maxLength={1000}
                          placeholder="작가 답변을 입력하세요"
                          className="w-full resize-none rounded-lg border border-hairline bg-canvas px-3 py-2 text-sm focus:border-lavender-ink focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleReply(q.id)}
                          disabled={replyingId === q.id}
                          className="text-sm font-medium text-terracotta hover:underline disabled:opacity-50"
                        >
                          {replyingId === q.id ? "등록 중…" : "답변 등록"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          {!authenticated ? (
            <button
              type="button"
              onClick={() => setAuthorMode((v) => !v)}
              className="text-xs text-mute underline-offset-2 hover:text-body hover:underline"
            >
              작가이신가요?
            </button>
          ) : (
            <p className="text-xs text-mute">
              작가 답변 모드 ·{" "}
              <button
                type="button"
                onClick={() => {
                  setAuthenticated(false);
                  setPasscode("");
                }}
                className="underline-offset-2 hover:underline"
              >
                로그아웃
              </button>
            </p>
          )}

          {authorMode && !authenticated && (
            <form
              onSubmit={handleAuthorLogin}
              className="mx-auto mt-3 flex max-w-xs gap-2"
            >
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="작가 인증 코드"
                className="h-9 flex-1 rounded-lg border border-hairline px-3 text-sm"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-hairline px-3 text-sm font-medium text-body"
              >
                확인
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
