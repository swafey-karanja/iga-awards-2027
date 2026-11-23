interface SectionHeadingProps {
    id: string;
    eyebrow: string;
    line1: string;
    line2?: string;
}

export default function SectionHeading({ id, eyebrow, line1, line2 }: SectionHeadingProps) {
    return (
        <div>
            <p className="font-mono text-xs uppercase tracking-wider text-gold">{eyebrow}</p>
            <h2
                id={id}
                className="mt-5 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.1] text-white"
            >
                {line1}
                {line2 && <span className="block text-slate-400">{line2}</span>}
            </h2>
        </div>
    );
}