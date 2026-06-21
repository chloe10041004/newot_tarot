import { cardNewsCards } from "@/data/storyCards";
import { CardNewsViewer } from "./CardNewsViewer";

export function CardNewsSection() {
  return (
    <section id="story" className="bg-dusty-pink/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-lavender-ink md:text-4xl">
            독서, 이런 고민 있으신가요?
          </h2>
        </div>

        <CardNewsViewer cards={cardNewsCards} />
      </div>
    </section>
  );
}
