import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// PLACEHOLDER content: replace with real links and details
const footer = {
    tagline: "PLACEHOLDER: a short line about the event, two lines at most.",
    links: [
        { label: "Programme", href: "#programme" },
        { label: "Venue", href: "#venue" },
        { label: "Gallery", href: "#gallery" },
        { label: "FAQ", href: "#faq" },
        { label: "Buy tickets", href: "#tickets" },
    ],
    address: "Street Address\nCity, Postcode",
    time: "18:30 Start",
    email: "info@example.com",
    credit: { label: "Sebadam", href: "#" }, // PLACEHOLDER URL
};

// PLACEHOLDER URLs
const socials = [
    { label: "Instagram", href: "#", icon: <InstagramIcon fontSize="small" /> },
    { label: "YouTube", href: "#", icon: <YouTubeIcon fontSize="small" /> },
    {
        label: "TikTok",
        href: "#",
        // MUI has no TikTok icon, so this is an inline SVG
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 1 0 5 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6Z" />
            </svg>
        ),
    },
];

const headingClass = "font-heading text-base text-white";
const linkClass =
    "text-sm text-white/50 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold";

export default function Footer() {
    return (
        <footer className="py-12 md:py-16">
            <div className="mx-auto grid w-[calc(100%-3rem)] gap-10 sm:grid-cols-2 md:w-[85%] lg:w-[65%] lg:grid-cols-[1.6fr_1fr_1fr]">
                <div className="sm:col-span-2 lg:col-span-1">
                    {/* PLACEHOLDER: replace with the real logo (next/image) */}
                    <a
                        href="#home"
                        className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-gold"
                    >
                        <AutoAwesomeIcon fontSize="small" className="text-gold" aria-hidden />
                        iGA Awards
                    </a>
                    <p className="mt-6 max-w-xs text-sm text-white/60">{footer.tagline}</p>

                    <ul className="mt-6 flex gap-4">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="text-white/60 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                                >
                                    {s.icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-xs text-white/50">
                        Created by{" "}
                        <a
                            href={footer.credit.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                        >
                            {footer.credit.label}
                        </a>
                    </p>
                </div>

                <nav aria-label="Footer">
                    <h2 className={headingClass}>Navigation</h2>
                    <ul className="mt-5 space-y-3">
                        {footer.links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={linkClass}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className={headingClass}>Event Details</h2>
                    <address className="mt-5 space-y-3 text-sm not-italic text-white/50">
                        <p className="whitespace-pre-line">{footer.address}</p>
                        <p>{footer.time}</p>
                        <p>
                            <a href={`mailto:${footer.email}`} className={linkClass}>
                                {footer.email}
                            </a>
                        </p>
                    </address>
                </div>
            </div>
        </footer>
    );
}