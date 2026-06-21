"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  tarotClasses,
  type TarotClassProduct,
} from "@/data/tarotClasses";
import { FloatingEnrollButton } from "./FloatingEnrollButton";
import { TarotFooter } from "./TarotFooter";

function ClassTabs({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="sticky top-[57px] z-40 border-b border-[rgba(197,160,89,0.12)] bg-[#0f1a2e]/95 px-6 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl justify-center gap-2">
        {tarotClasses.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onChange(c.id)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              activeId === c.id ? "tarot-tab-active" : "tarot-tab-inactive"
            }`}
          >
            {c.tabLabel}
          </button>
        ))}
      </div>
    </div>
  );
}

function HeroSection({ product }: { product: TarotClassProduct }) {
  return (
    <section className="tarot-mesh px-6 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="tarot-fade-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(197,160,89,0.35)] px-4 py-1.5 text-sm text-[var(--newit-gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--newit-gold)]" />
            {product.badge}
          </p>
          <p className="mb-2 text-sm text-[var(--tarot-muted)]">
            {product.projectName}
          </p>
          <h1 className="mb-4 text-2xl font-bold leading-snug tracking-tight md:text-3xl lg:text-4xl">
            {product.title}
          </h1>
          <p className="tarot-gold-text mb-4 text-lg font-medium leading-relaxed md:text-xl">
            {product.hook}
          </p>
          {product.hookSub && (
            <p className="mb-6 text-sm leading-relaxed text-[var(--tarot-muted)] md:text-base">
              {product.hookSub}
            </p>
          )}
          <p className="mb-6 text-2xl font-bold text-[var(--newit-gold)]">
            {product.classInfo.price}
            {product.classInfo.priceNote && (
              <span className="mt-1 block text-sm font-normal text-[var(--tarot-muted)]">
                {product.classInfo.priceNote}
              </span>
            )}
          </p>
          <a
            href="#enroll"
            className="tarot-btn-primary inline-flex h-12 items-center rounded-full px-6 text-sm md:text-base"
          >
            {product.ctaLabel}
          </a>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[rgba(197,160,89,0.25)] shadow-2xl">
            <Image
              src={product.heroImage}
              alt={`${product.title} 비주얼`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection({ product }: { product: TarotClassProduct }) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          이런 고민, 있으시죠?
        </h2>
        {product.painStory && (
          <p className="mb-8 text-center text-[var(--tarot-muted)]">
            {product.painStory}
          </p>
        )}
        <ul className="space-y-4">
          {product.painPoints.map((point) => (
            <li
              key={point.slice(0, 24)}
              className="tarot-card-surface rounded-xl p-5 text-sm leading-relaxed md:text-base"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionSection({ product }: { product: TarotClassProduct }) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="tarot-gold-text mb-4 text-center text-2xl font-bold md:text-3xl">
          {product.solution.lead}
        </h2>
        <div className="space-y-4">
          {product.solution.paragraphs.map((p) => (
            <p
              key={p.slice(0, 30)}
              className="text-center text-sm leading-relaxed text-[var(--tarot-muted)] md:text-base"
            >
              {p}
            </p>
          ))}
        </div>
        {product.solution.bullets && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.solution.bullets.map((b) => (
              <li
                key={b}
                className="tarot-card-surface rounded-lg px-4 py-3 text-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function TransformSection({ product }: { product: TarotClassProduct }) {
  const heading =
    product.id === "tuesday"
      ? "4주 뒤, 당신은 이렇게 변합니다"
      : "수강 직후, 이렇게 달라집니다";

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
          {heading}
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {product.transformations.map((t, i) => (
            <li
              key={t.title}
              className="tarot-card-surface rounded-2xl p-6"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--newit-gold)] text-sm font-bold text-[var(--newit-navy-deep)]">
                {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-[var(--newit-gold)]">
                {t.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--tarot-muted)]">
                {t.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CurriculumSection({ product }: { product: TarotClassProduct }) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
          커리큘럼
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-[var(--tarot-muted)] md:text-base">
          {product.curriculumIntro}
        </p>

        {product.curriculumWeeks && (
          <ul className="space-y-6">
            {product.curriculumWeeks.map((week) => (
              <li
                key={week.week}
                className="tarot-card-surface rounded-2xl p-6 md:p-8"
              >
                <div className="mb-4 flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-semibold text-[var(--newit-gold)]">
                    {week.week}
                  </span>
                  <h3 className="text-lg font-semibold">{week.title}</h3>
                </div>
                <ul className="space-y-2">
                  {week.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-[var(--tarot-muted)]"
                    >
                      <span className="text-[var(--newit-gold)]">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}

        {product.curriculumBlocks && (
          <ul className="space-y-4">
            {product.curriculumBlocks.map((block) => (
              <li
                key={block.title}
                className="tarot-card-surface flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="shrink-0 rounded-full bg-[var(--newit-gold)] px-3 py-1 text-sm font-bold text-[var(--newit-navy-deep)]">
                  {block.time}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold">{block.title}</h3>
                  <p className="text-sm text-[var(--tarot-muted)]">
                    {block.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ComparisonSection({ product }: { product: TarotClassProduct }) {
  if (!product.comparisonTable) return null;
  const { headers, rows } = product.comparisonTable;

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl overflow-x-auto">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          타로 vs 레노먼드
        </h2>
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="border border-[rgba(197,160,89,0.25)] bg-[rgba(197,160,89,0.12)] px-4 py-3 text-left font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className="border border-[rgba(197,160,89,0.15)] px-4 py-3 text-[var(--tarot-muted)]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ClassInfoSection({ product }: { product: TarotClassProduct }) {
  const items = [
    { label: "정원", value: product.classInfo.capacity },
    { label: "일정", value: product.classInfo.schedule },
    { label: "장소", value: product.classInfo.location },
    { label: "수강료", value: product.classInfo.price },
    { label: "준비물", value: product.classInfo.materials },
  ];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          클래스 안내
        </h2>
        <dl className="tarot-card-surface divide-y divide-[rgba(197,160,89,0.15)] rounded-2xl">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-4"
            >
              <dt className="w-20 shrink-0 text-sm font-semibold text-[var(--newit-gold)]">
                {item.label}
              </dt>
              <dd className="text-sm text-[var(--tarot-muted)]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function EnrollSection({ product }: { product: TarotClassProduct }) {
  return (
    <section id="enroll" className="scroll-mt-28 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">수강 신청</h2>
        {product.enrollment.selectiveNote && (
          <p className="mb-4 text-sm text-[var(--newit-gold)]">
            {product.enrollment.selectiveNote}
          </p>
        )}
        <p className="mb-8 text-sm text-[var(--tarot-muted)]">
          {product.enrollment.note}
        </p>

        {!product.enrollment.isFree && product.enrollment.bankAccount && (
          <div className="tarot-card-surface mb-6 rounded-xl p-5 text-left">
            <p className="text-sm font-semibold text-[var(--newit-gold)]">
              입금 계좌
            </p>
            <p className="mt-2 text-sm">
              {product.enrollment.bankAccount}
              <br />
              예금주: {product.enrollment.accountHolder}
            </p>
          </div>
        )}

        <a
          href={product.enrollment.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tarot-btn-primary inline-flex h-12 items-center rounded-full px-8 text-base"
        >
          수강 신청서 작성하기 →
        </a>
      </div>
    </section>
  );
}

function RefundSection({ product }: { product: TarotClassProduct }) {
  if (product.refundPolicy.length === 0) return null;

  return (
    <section className="px-6 pb-16 md:pb-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-lg font-semibold text-[var(--tarot-muted)]">
          환불 규정
        </h2>
        <ul className="space-y-2">
          {product.refundPolicy.map((r) => (
            <li
              key={r.condition}
              className="flex justify-between gap-4 text-sm text-[var(--tarot-muted)]"
            >
              <span>{r.condition}</span>
              <span className="shrink-0 text-[var(--newit-gold)]">
                {r.rate}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClassContent({ product }: { product: TarotClassProduct }) {
  return (
    <div key={product.id} className="tarot-fade-in">
      <HeroSection product={product} />
      <PainSection product={product} />
      <SolutionSection product={product} />
      <TransformSection product={product} />
      <CurriculumSection product={product} />
      <ComparisonSection product={product} />
      <ClassInfoSection product={product} />
      <EnrollSection product={product} />
      <RefundSection product={product} />
    </div>
  );
}

export function TarotPageContent() {
  const searchParams = useSearchParams();
  const initial =
    searchParams.get("class") === "lenormand" ? "lenormand" : "tuesday";
  const [activeId, setActiveId] = useState(initial);

  const product =
    tarotClasses.find((c) => c.id === activeId) ?? tarotClasses[0];

  const handleTabChange = useCallback((id: string) => {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("class", id);
    window.history.replaceState({}, "", url.toString());
  }, []);

  useEffect(() => {
    const param = searchParams.get("class");
    if (param === "tuesday" || param === "lenormand") {
      setActiveId(param);
    }
  }, [searchParams]);

  return (
    <>
      <ClassTabs activeId={activeId} onChange={handleTabChange} />
      <ClassContent product={product} />
      <FloatingEnrollButton product={product} />
      <TarotFooter />
    </>
  );
}
