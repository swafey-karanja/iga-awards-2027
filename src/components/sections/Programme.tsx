import SectionHeading from "@/components/ui/SectionHeading";

// PLACEHOLDER content: replace with the real schedule
const intro = "PLACEHOLDER: doors, start time and closing time in one or two short lines.";

const schedule = [
    { time: "18:30", title: "Arrival & Reception", text: "PLACEHOLDER: short description of this slot, two lines at most.", stage: "Foyer" },
    { time: "19:00", title: "Performer One", text: "PLACEHOLDER: short description of this slot, two lines at most.", stage: "Main Stage" },
    { time: "20:00", title: "Performer Two", text: "PLACEHOLDER: short description of this slot, two lines at most.", stage: "Main Stage" },
    { time: "21:00", title: "Performer Three", text: "PLACEHOLDER: short description of this slot, two lines at most.", stage: "Main Stage" },
];

export default function Programme() {
    return (
        <section id="programme" aria-labelledby="programme-title" className="py-16 md:py-24">
            <div className="mx-auto w-[calc(100%-3rem)] md:w-[85%] lg:w-[65%] lg:px-10">
                <div className="flex items-end justify-between">
                    <SectionHeading
                        id="programme-title"
                        eyebrow="The Programme"
                        line1="An Evening"
                        line2="By The Hour"
                    />
                    <p className="max-w-xs text-sm text-white/60">{intro}</p>
                </div>

                <ol className="mt-12 border-b border-white/10">
                    {schedule.map((slot) => (
                        <li
                            key={slot.time}
                            className="grid grid-cols-2 items-center gap-x-6 gap-y-3 border-t border-white/10 py-7 lg:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)_7rem]"
                        >
                            <time className="font-mono text-xl text-gold">{slot.time}</time>
                            <p className="col-span-2 font-heading text-sm uppercase tracking-wide text-white lg:col-span-1">
                                {slot.title}
                            </p>
                            <p className="col-span-2 max-w-xs text-sm text-white/60 lg:col-span-1">
                                {slot.text}
                            </p>
                            <span className="col-start-2 row-start-1 justify-self-end font-mono text-xs uppercase tracking-wider text-gold lg:col-auto lg:row-auto">
                {slot.stage}
              </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}