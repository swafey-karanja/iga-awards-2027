// PLACEHOLDER content: replace with real stats and quote
const experience = {
    eyebrow: "The Experience",
    titleLine1: "One Night",
    titleLine2: "No Compromises",
    quote:
        "PLACEHOLDER: a short press or attendee quote about the event goes here, kept to two lines.",
    quoteSource: "Publication Name",
};

const stats = [
    { value: "400+", label: "Guests" },
    { value: "8+", label: "Hours of music" },
    { value: "7", label: "Editions held" },
    { value: "90%", label: "Tickets claimed" },
];

// Cross-shaped dividers between the four cells
const cellBorders = [
    "border-b border-r",
    "border-b",
    "border-r",
    "",
];

export default function Experience() {
    return (
        <section
            id="about"
            aria-labelledby="experience-title"
            className="bg-[radial-gradient(ellipse_at_center,rgba(197,155,37,0.06),transparent_60%)] py-20 md:py-28"
        >
            <div className="mx-auto grid w-[calc(100%-3rem)] gap-12 md:w-[85%] lg:w-[65%] lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-12 lg:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-gold">
                            {experience.eyebrow}
                        </p>
                        <h2
                            id="experience-title"
                            className="mt-5 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-normal uppercase leading-[1.1] text-white"
                        >
                            {experience.titleLine1}
                            <span className="block text-slate-400">{experience.titleLine2}</span>
                        </h2>
                    </div>

                    <figure className="border-l border-gold bg-linear-to-r from-gold/10 to-transparent px-6 py-8 sm:px-8">
                        <blockquote className="max-w-sm text-white/80">
                            &ldquo;{experience.quote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-6 font-mono text-xs uppercase tracking-wider text-gold">
                            &mdash; {experience.quoteSource}
                        </figcaption>
                    </figure>
                </div>

                <dl className="grid grid-cols-2 self-start">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`relative flex min-h-40 flex-col-reverse justify-end gap-2 border-white/15 p-5 pt-12 sm:min-h-44 sm:p-6 sm:pt-14 ${cellBorders[i]}`}
                        >
                            <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-gold sm:text-xs">
                                {stat.label}
                            </dt>
                            <dd className="font-heading text-4xl text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                            <span
                                aria-hidden="true"
                                className="absolute right-5 top-5 font-mono text-xs text-gold sm:right-6"
                            >
                {String(i + 1).padStart(2, "0")}
              </span>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}