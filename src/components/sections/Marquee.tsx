// PLACEHOLDER content
const items = ["31/07/2027", "EVENT NAME", "CITY"];

function Group() {
    return (
        <div className="flex shrink-0 items-center">
            {Array.from({ length: 4 }).flatMap((_, r) =>
                    items.map((text) => (
                        <span key={`${r}-${text}`} className="flex items-center">
            <span className="px-6 font-heading text-lg uppercase text-white/40">{text}</span>
            <span className="text-white/40">-</span>
          </span>
                    )),
            )}
        </div>
    );
}

export default function Marquee() {
    return (
        <div
            aria-hidden="true"
            className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
            <div className="marquee-track flex w-max">
                <Group />
                <Group />
            </div>
        </div>
    );
}