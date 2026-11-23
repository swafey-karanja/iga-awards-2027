"use client";

import { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import PauseIcon from "@mui/icons-material/Pause";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export interface Testimonial {
    quote: string;
    name: string;
    source: string;
}

const AUTO_SCROLL_MS = 6000;

const arrowClass =
    "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-30";

const initials = (name: string) =>
    name.split(" ").map((word) => word[0]).join("").toUpperCase();

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [userPaused, setUserPaused] = useState(false);
    const [interacting, setInteracting] = useState(false); // hover, touch or keyboard focus
    const total = items.length;
    const isPlaying = !userPaused && !interacting;

    // Each slide is exactly one scroller-width wide, so the index is scrollLeft / width
    const handleScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const index = Math.round(el.scrollLeft / el.clientWidth);
        setActive((current) => (current === index ? current : index));
    };

    // No `behavior` is passed, so the CSS scroll-behavior applies (and respects reduced motion)
    const goTo = (index: number) => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollTo({ left: index * el.clientWidth });
    };

    // Auto-scroll: the timer restarts whenever the slide changes, so manual
    // navigation always gets a full interval before the next automatic move.
    useEffect(() => {
        if (!isPlaying || total < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const id = setTimeout(() => goTo((active + 1) % total), AUTO_SCROLL_MS);
        return () => clearTimeout(id);
    }, [active, isPlaying, total]);

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Press reviews"
            className="relative"
            onPointerEnter={() => setInteracting(true)}
            onPointerLeave={() => setInteracting(false)}
            onFocus={() => setInteracting(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);
            }}
        >
            <div className="md:px-16">
                <div
                    ref={scrollerRef}
                    onScroll={handleScroll}
                    tabIndex={0}
                    aria-live={isPlaying ? "off" : "polite"}
                    aria-label="Press reviews, scroll horizontally"
                    className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain py-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-gold motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((item, i) => (
                        <figure
                            key={item.name}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} of ${total}`}
                            className="w-full shrink-0 snap-center text-center"
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
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    disabled={active === 0}
                    aria-label="Previous review"
                    className={`${arrowClass} md:absolute md:left-0 md:top-1/3`}
                >
                    <ChevronLeftIcon />
                </button>

                <div className="flex items-center gap-3">
                    {items.map((item, i) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => goTo(i)}
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

                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => setUserPaused((p) => !p)}*/}
                    {/*    aria-label={userPaused ? "Start auto-scroll" : "Pause auto-scroll"}*/}
                    {/*    className={`${arrowClass} ml-1`}*/}
                    {/*>*/}
                    {/*    {userPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}*/}
                    {/*</button>*/}
                </div>

                <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    disabled={active === total - 1}
                    aria-label="Next review"
                    className={`${arrowClass} md:absolute md:right-0 md:top-1/3`}
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}