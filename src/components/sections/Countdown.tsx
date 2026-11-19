"use client";

import { useEffect, useState } from "react";

const LABELS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function getParts(target: number): number[] {
    const diff = Math.max(0, target - Date.now());
    const s = Math.floor(diff / 1000);
    return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
}

export default function Countdown({ targetDate }: { targetDate: string }) {
    const [parts, setParts] = useState<number[] | null>(null);

    useEffect(() => {
        const target = new Date(targetDate).getTime();
        const tick = () => setParts(getParts(target));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return (
        <div role="timer" aria-label="Time until the event" className="flex gap-6 sm:gap-8">
            {LABELS.map((label, i) => (
                <div key={label}>
                    <div className="font-heading text-5xl tabular-nums text-white">
                        {String(parts?.[i] ?? 0).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-md text-white/60">{label}</div>
                </div>
            ))}
        </div>
    );
}