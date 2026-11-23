import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// PLACEHOLDER content: replace with real questions and answers
const faqs = [
    { question: "How long does the event last?", answer: "PLACEHOLDER: a clear, short answer goes here." },
    { question: "What's the dress code?", answer: "PLACEHOLDER: a clear, short answer goes here." },
    { question: "Is the venue accessible?", answer: "PLACEHOLDER: a clear, short answer goes here." },
    { question: "Can I get a refund if I can't attend?", answer: "PLACEHOLDER: a clear, short answer goes here." },
    { question: "Is there a minimum age requirement?", answer: "PLACEHOLDER: a clear, short answer goes here." },
];

const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

export default function Faq() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="bg-[radial-gradient(ellipse_at_85%_60%,rgba(197,155,37,0.06),transparent_40%)] py-16 md:py-24"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
                }}
            />

            <div className="mx-auto w-[calc(100%-3rem)] max-w-4xl">
                <div className="text-center">
                    <p className="font-mono text-xs uppercase tracking-wider text-gold">FAQ</p>
                    <h2
                        id="faq-title"
                        className="mt-5 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.1] text-white"
                    >
                        Got a question?
                    </h2>
                    <p className="mt-4 text-sm text-white/50">
                        PLACEHOLDER: a short reassuring line goes here.
                    </p>
                </div>

                <div className="mt-12 border-b border-white/10">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group border-t border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <AddIcon fontSize="small" aria-hidden className="shrink-0 group-open:hidden" />
                                <RemoveIcon fontSize="small" aria-hidden className="hidden shrink-0 group-open:block" />
                            </summary>
                            <p className="max-w-md pb-6 text-sm text-white/60 group-open:animate-[fade-down_300ms_ease-out]">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}