"use client";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircle";
import ReusableModal from "@/components/ui/Modal";
import type { AwardCategory } from "@/types/awards";

const NOMINATE_HREF = "#nominate"; // PLACEHOLDER: nomination / voting link

interface AwardCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    category: AwardCategory;
}

export default function AwardCategoryModal({ isOpen, onClose, category }: AwardCategoryModalProps) {
    const { category_title, description, nominees } = category;

    return (
        <ReusableModal
            isOpen={isOpen}
            onClose={onClose}
            title={category_title}
            size="2xl"
            scrollBehavior="inside"
            className="rounded-2xl max-h-[95vh] max-w-screen xl:max-w-5xl"
            headerClassName="border-b border-white/10 pb-4"
            bodyClassName="py-6"
            footerClassName="border-t border-white/10"
            buttons={[{ label: "Nominate Now", href: NOMINATE_HREF, onClick: onClose }]}
        >
            <p className="border-l border-gold bg-linear-to-r from-gold/10 to-transparent px-5 py-4 text-sm text-white/80">
                {description}
            </p>

            <div className="mt-6">
                <h3 className="flex items-center gap-2 font-heading text-base text-white">
                    <EmojiEventsOutlinedIcon fontSize="small" className="text-gold" aria-hidden />
                    Nominees
                </h3>

                {nominees.length > 0 ? (
                    <ul className="mt-4 space-y-3">
                        {nominees.map((name, i) => (
                            <li key={name.nominee_id ?? i} className="flex items-start gap-2 text-sm text-white/70">
                                <CheckCircleOutlineIcon fontSize="small" className="mt-px shrink-0 text-gold" aria-hidden />
                                <span>{name.nominee ?? `Nominee ${i + 1}`}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4 text-sm text-white/50">Nominees will be announced soon.</p>
                )}
            </div>
        </ReusableModal>
    );
}