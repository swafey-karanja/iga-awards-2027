import Button from "@mui/material/Button";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { navItems, navCta } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-linear-to-b from-black/80 to-transparent">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-gold focus:px-4 focus:py-2 focus:text-black"
            >
                Skip to content
            </a>

            <div className="relative mx-auto flex h-20 max-w-8/12 items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    {/* PLACEHOLDER: replace with the real logo (next/image) */}
                    <a
                        href="#home"
                        className="flex items-center gap-2 font-heading text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-gold"
                    >
                        <AutoAwesomeIcon fontSize="small" className="text-gold" aria-hidden />
                        iGA Awards
                    </a>

                    <span className="hidden h-4 w-px bg-white/30 lg:block" aria-hidden />

                    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-white/90 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <Button
                    href={navCta.href}
                    variant="contained"
                    endIcon={<ShoppingCartOutlinedIcon />}
                    sx={{
                        display: { xs: "none", lg: "inline-flex" },
                        bgcolor: "#f5f1ea",
                        color: "#000",
                        "&:hover": { bgcolor: "#fff" },
                    }}
                >
                    {navCta.label}
                </Button>

                <MobileMenu items={navItems} cta={navCta} />
            </div>
        </header>
    );
}