"use client";

import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface Testimonial {
    quote: string;
    name: string;
    source: string;
}

const arrowClass =
    "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold";

// Active slide sits in view, the previous one waits above, all others wait below.
// The active slide waits 200ms before fading in, so the outgoing one clears first.
function slideClass(index: number, active: number, total: number): string {
    const offset = (index - active + total) % total;
    if (offset === 0) return "translate-y-0 opacity-100 delay-200";
    if (offset === total - 1 && total > 2) return "-translate-y-12 opacity-0";
    return "translate-y-12 opacity-0";
}

const initials = (name: string) =>
    name.split(" ").map((word) => word[0]).join("").toUpperCase();

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
    const [active, setActive] = useState(0);
    const total = items.length;

    const next = () => setActive((a) => (a + 1) % total);
    const prev = () => setActive((a) => (a - 1 + total) % total);

    return (
        <div role="region" aria-roledescription="carousel" aria-label="Press reviews" className="relative">
            <div aria-live="polite" className="grid py-2 md:px-16">
                {items.map((item, i) => (
                    <figure
                        key={item.name}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${total}`}
                        aria-hidden={i !== active}
                        className={`col-start-1 row-start-1 text-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${slideClass(i, active, total)}`}
                    >
                        <blockquote className="mx-auto max-w-2xl font-heading text-[clamp(1.5rem,3.2vw,2.5rem)] leading-snug text-white">
                            <span aria-hidden="true" className="text-gold">&ldquo;</span>
                            {item.quote}
                            <span aria-hidden="true" className="text-gold">&rdquo;</span>
                        </blockquote>
                        <figcaption className="mt-8">
                            <p className="font-mono text-sm tracking-wide text-white">{item.name}</p>
                            <p className="mt-1 text-xs text-white/40">{item.source}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
                <button type="button" onClick={prev} aria-label="Previous review" className={`${arrowClass} md:absolute md:left-0 md:top-1/3`}>
                    <ChevronLeftIcon />
                </button>

                <div className="flex gap-3">
                    {items.map((item, i) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-label={`Show review by ${item.name}`}
                            aria-current={i === active}
                            className={`grid h-10 w-10 place-items-center rounded-full font-mono text-[0.65rem] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-gold ${
                                i === active
                                    ? "bg-gold text-black"
                                    : "border border-white/15 text-white/70 hover:border-white/40"
                            }`}
                        >
                            {initials(item.name)}
                        </button>
                    ))}
                </div>

                <button type="button" onClick={next} aria-label="Next review" className={`${arrowClass} md:absolute md:right-0 md:top-1/3`}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}