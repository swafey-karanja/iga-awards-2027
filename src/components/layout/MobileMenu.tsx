"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import type { NavItem } from "@/data/navigation";

interface MobileMenuProps {
    items: NavItem[];
    cta: NavItem;
}

export default function MobileMenu({ items, cta }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="grid h-11 w-11 place-items-center text-white focus-visible:outline-2 focus-visible:outline-gold"
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </button>

            {open && (
                <nav
                    id="mobile-nav"
                    aria-label="Mobile"
                    className="absolute inset-x-0 top-full flex max-h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto bg-black px-6 pb-8 pt-4"
                >
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={close}
                            className="py-3 font-heading text-lg text-white transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button
                        href={cta.href}
                        onClick={close}
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        {cta.label}
                    </Button>
                </nav>
            )}
        </div>
    );
}