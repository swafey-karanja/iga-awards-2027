import SectionHeading from "@/components/ui/SectionHeading";

// PLACEHOLDER content: replace with the real rules
const intro = "PLACEHOLDER: one short line introducing the rules below.";

const rules = [
    { title: "Dress Code", text: "PLACEHOLDER: one or two sentences explaining this rule." },
    { title: "Phones", text: "PLACEHOLDER: one or two sentences explaining this rule." },
    { title: "Time", text: "PLACEHOLDER: one or two sentences explaining this rule." },
    { title: "Age", text: "PLACEHOLDER: one or two sentences explaining this rule." },
];

export default function HouseNotes() {
    return (
        <section
            id="house-notes"
            aria-labelledby="house-notes-title"
            className="bg-[radial-gradient(ellipse_at_75%_30%,rgba(197,155,37,0.06),transparent_55%)] py-16 md:py-24"
        >
            <div className="mx-auto grid w-[calc(100%-3rem)] gap-12 md:w-[85%] lg:w-[65%] lg:grid-cols-2 lg:gap-16 lg:px-10">
                <div>
                    <SectionHeading
                        id="house-notes-title"
                        eyebrow="House Notes"
                        line1="How The Evening Is Held"
                    />
                    <p className="mt-6 max-w-xs text-sm text-white/60">{intro}</p>
                </div>

                <ol className="border-b border-white/10">
                    {rules.map((rule, i) => (
                        <li
                            key={rule.title}
                            className="grid grid-cols-[3.5rem_1fr] gap-x-2 border-t border-white/10 py-6"
                        >
              <span className="pt-1 font-mono text-xs text-gold">
                #{String(i + 1).padStart(2, "0")}
              </span>
                            <div>
                                <h3 className="font-heading text-base uppercase tracking-wide text-white">
                                    {rule.title}
                                </h3>
                                <p className="mt-3 max-w-md text-sm text-white/60">{rule.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}