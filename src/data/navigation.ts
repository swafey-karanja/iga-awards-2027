export interface NavItem {
    label: string;
    href: string;
}

// PLACEHOLDER: update labels and section ids
export const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Programme", href: "#programme" },
    { label: "Venue", href: "#venue" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
];

export const navCta: NavItem = { label: "Get tickets", href: "#tickets" };