"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
    useEffect(() => {
        // Leave native scrolling alone for people who prefer reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.05, // lower = longer glide (0.05 very floaty, 0.15 snappier)
            // Smooth anchor links, stopping below the fixed 5rem header
            anchors: { offset: -60 },
        });

        return () => lenis.destroy();
    }, []);

    return null;
}