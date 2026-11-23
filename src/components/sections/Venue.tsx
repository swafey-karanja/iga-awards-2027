import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

// PLACEHOLDER content: replace with real venue details
const venue = {
    name: "Venue Name",
    text: "PLACEHOLDER: two or three lines describing the venue and what makes it suited to the event.",
    image: "/sarit.jpg", // PLACEHOLDER: 1000x1200+
    imageAlt: "PLACEHOLDER: exterior of the venue at night",
    details: [
        { label: "Address", value: "Street Address\nCity, Postcode" },
        { label: "Doors", value: "18:30 — Arrivals" },
        { label: "Capacity", value: "000 guests" },
        { label: "Acoustic", value: "PLACEHOLDER detail" },
    ],
};

export default function Venue() {
    return (
        <section id="venue" aria-labelledby="venue-title" className="pb-16 md:pb-24">
            <div className="mx-auto w-[calc(100%-3rem)] md:w-[85%] lg:w-[65%]">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface">
                    <div className="relative p-8 sm:p-12 lg:w-[58%] lg:py-16">
                        <SectionHeading id="venue-title" eyebrow="The Venue" line1={venue.name} />
                        <p className="mt-6 max-w-sm text-sm text-white/60">{venue.text}</p>

                        <dl className="mt-10 grid max-w-md grid-cols-1 gap-8 sm:grid-cols-2">
                            {venue.details.map((d) => (
                                <div key={d.label}>
                                    <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-gold/70">
                                        {d.label}
                                    </dt>
                                    <dd className="mt-2 whitespace-pre-line text-sm text-white">{d.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[45%]">
                        <Image
                            src={venue.image}
                            alt={venue.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 30vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-surface to-transparent lg:bg-linear-to-r" />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-surface to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}