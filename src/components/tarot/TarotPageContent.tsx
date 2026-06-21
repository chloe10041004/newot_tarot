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
    <div className="tarot-header-soft sticky top-[65px] z-40 px-6 py-4">
      <div className="mx-auto flex max-w-6xl justify-center gap-3">
        {tarotClasses.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onChange(c.id)}
            className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
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
    <section className="tarot-mesh relative px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="tarot-fade-in">
          <p className="tarot-badge mb-5 inline-flex items-center gap-2 px-4 py-2 text-sm">
            <span className="text-base" aria-hidden>✦</span>
            {product.badge}
          </p>
          <p className="mb-3 text-sm tracking-wide text-[var(--tarot-muted)]">
            {product.projectName}
          </p>
          <h1 className="tarot-section-title mb-5 text-2xl md:text-3xl lg:text-[2rem]">
            {product.title}
          </h1>
          <p className="tarot-gold-text mb-4 text-lg leading-[1.7] md:text-xl">
            {product.hook}
          </p>
          {product.hookSub && (
            <p className="tarot-section-sub mb-8 text-sm md:text-base">
              {product.hookSub}
            </p>
          )}
          <p className="mb-8 text-2xl font-semibold text-[var(--newit-gold)]">
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
          <div className="tarot-hero-frame relative aspect-[4/3] w-full max-w-md overflow-hidden">
            <Image
              src={product.heroImage}
              alt={`${product.title} 비주얼`}
              fill
              className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
              sizes="(max-width: 1024px) 90vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121c30]/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection({ product }: { product: TarotClassProduct }) {
  return (
    <section className="tarot-section-alt px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="tarot-divider mb-6" />
        <h2 className="tarot-section-title mb-3 text-center text-xl md:text-2xl">
          이런 고민, 있으시죠?
        </h2>
        {product.painStory && (
          <p className="tarot-section-sub mb-10 text-center text-sm md:text-base">
            {product.painStory}
          </p>
        )}
        <ul className="space-y-5">
          {product.painPoints.map((point) => (
            <li
              key={point.slice(0, 24)}
              className="tarot-quote-card text-sm leading-[1.8] md:text-base"
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
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="tarot-gold-text tarot-section-title mb-6 text-center text-xl md:text-2xl">
          {product.solution.lead}
        </h2>
        <div className="space-y-5">
          {product.solution.paragraphs.map((p) => (
            <p
              key={p.slice(0, 30)}
              className="tarot-section-sub text-center text-sm md:text-base"
            >
              {p}
            </p>
          ))}
        </div>
        {product.solution.bullets && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.solution.bullets.map((b) => (
              <li
                key={b}
                className="tarot-card-surface px-5 py-4 text-sm leading-relaxed"
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
    <section className="tarot-section-alt px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="tarot-divider mb-6" />
        <h2 className="tarot-section-title mb-12 text-center text-xl md:text-2xl">
          {heading}
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {product.transformations.map((t, i) => (
            <li
              key={t.title}
              className="tarot-card-surface p-7"
            >
              <span className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#e8d5a8] to-[#c5a059] text-sm font-semibold text-[var(--newit-navy-deep)]">
                {i + 1}
              </span>
              <h3 className="mb-3 text-base font-medium text-[var(--newit-gold)]">
                {t.title}
              </h3>
              <p className="text-sm leading-[1.75] text-[var(--tarot-muted)]">
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
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="tarot-section-title mb-4 text-center text-xl md:text-2xl">
          커리큘럼
        </h2>
        <p className="tarot-section-sub mx-auto mb-12 max-w-2xl text-center text-sm md:text-base">
          {product.curriculumIntro}
        </p>

        {product.curriculumWeeks && (
          <ul className="space-y-6">
            {product.curriculumWeeks.map((week) => (
              <li
                key={week.week}
                className="tarot-card-surface p-7 md:p-8"
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
                className="tarot-card-surface flex flex-col gap-4 p-7 sm:flex-row sm:items-start sm:gap-6"
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
    <section className="tarot-section-alt px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="tarot-section-title mb-10 text-center text-xl md:text-2xl">
          타로 vs 레노먼드
        </h2>
        <ul className="space-y-4">
          {rows.map((row) => (
            <li key={row[0]} className="tarot-compare-card">
              <p className="mb-2 text-sm font-medium text-[var(--newit-gold)]">
                {row[0]}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-xs text-[var(--tarot-muted)]">
                    {headers[1]}
                  </p>
                  <p className="text-sm leading-relaxed">{row[1]}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-[var(--tarot-muted)]">
                    {headers[2]}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--newit-gold)]">
                    {row[2]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="tarot-divider mb-6" />
        <h2 className="tarot-section-title mb-10 text-center text-xl md:text-2xl">
          클래스 안내
        </h2>
        <dl className="tarot-card-surface divide-y divide-[rgba(212,184,122,0.1)] overflow-hidden">
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
    <section id="enroll" className="tarot-section-alt scroll-mt-28 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="tarot-section-title mb-5 text-xl md:text-2xl">수강 신청</h2>
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
