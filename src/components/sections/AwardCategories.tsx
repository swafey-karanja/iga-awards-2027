"use client";

import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ErrorOutlineIcon from "@mui/icons-material/Error";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SectionHeading from "@/components/ui/SectionHeading";
import { useAwardCategories } from "@/hooks/useAwardCategories";
import type { AwardCategory } from "@/types/awards";
import AwardCategoryModal from "./AwardCategoryModal";

interface AwardCategoriesProps {
    limit?: number; // Number of categories to display. If not provided, shows all
    showPagination?: boolean;
    categoriesPerPage?: number;
    viewAllButton?: boolean; // Show the "View All Categories" button
    showSearch?: boolean;
}

const VIEW_ALL_HREF = "/award-categories"; // PLACEHOLDER: full categories page

const pageButtonClass =
    "grid h-10 min-w-10 place-items-center rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-30";

export default function AwardCategories({
                                            limit,
                                            showPagination = true,
                                            categoriesPerPage = 9,
                                            viewAllButton = false,
                                            showSearch = true,
                                        }: AwardCategoriesProps) {
    const { data, isLoading, error, refetch } = useAwardCategories();
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<AwardCategory | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sort by priority, then alphabetically
    const sorted = useMemo(
        () =>
            [...(data ?? [])].sort(
                (a, b) => a.priority - b.priority || a.category_title.localeCompare(b.category_title),
            ),
        [data],
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return showSearch && q
            ? sorted.filter((c) => c.category_title.toLowerCase().includes(q))
            : sorted;
    }, [sorted, query, showSearch]);

    const limited = limit ? filtered.slice(0, limit) : filtered;

    const totalPages = showPagination ? Math.ceil(limited.length / categoriesPerPage) : 1;
    const page = Math.min(currentPage, Math.max(totalPages, 1));
    const visible = showPagination
        ? limited.slice((page - 1) * categoriesPerPage, page * categoriesPerPage)
        : limited;

    const openModal = (category: AwardCategory) => {
        setSelected(category);
        setIsModalOpen(true);
    };

    return (
        <section id="categories" aria-labelledby="categories-title" className="py-16 md:py-24">
            <div className="mx-auto w-[calc(100%-3rem)] md:w-[85%] lg:w-[65%]">
                <div className="flex items-end justify-between">
                    <SectionHeading
                        id="categories-title"
                        eyebrow="Award Categories"
                        line1="Honouring"
                        line2="The Best"
                    />
                    {/* PLACEHOLDER */}
                    <p className="max-w-xs text-sm text-white/60">
                        PLACEHOLDER: a short line about the awards and how categories are judged.
                    </p>
                </div>

                {/*{showSearch && !isLoading && !error && sorted.length > 0 && (*/}
                {/*    <div className="mt-10">*/}
                {/*        <TextField*/}
                {/*            value={query}*/}
                {/*            onChange={(e) => {*/}
                {/*                setQuery(e.target.value);*/}
                {/*                setCurrentPage(1);*/}
                {/*            }}*/}
                {/*            type="search"*/}
                {/*            placeholder="Search categories by name..."*/}
                {/*            size="small"*/}
                {/*            fullWidth*/}
                {/*            className="lg:max-w-xl"*/}
                {/*            slotProps={{*/}
                {/*                htmlInput: { "aria-label": "Search award categories" },*/}
                {/*                input: {*/}
                {/*                    startAdornment: (*/}
                {/*                        <InputAdornment position="start">*/}
                {/*                            <SearchIcon fontSize="small" />*/}
                {/*                        </InputAdornment>*/}
                {/*                    ),*/}
                {/*                },*/}
                {/*            }}*/}
                {/*            sx={{*/}
                {/*                "& .MuiOutlinedInput-root": {*/}
                {/*                    borderRadius: 9999,*/}
                {/*                    bgcolor: "rgba(255,255,255,0.04)",*/}
                {/*                    fontSize: "0.875rem",*/}
                {/*                    "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },*/}
                {/*                    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },*/}
                {/*                    "&.Mui-focused fieldset": { borderColor: "primary.main" },*/}
                {/*                },*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*)}*/}

                <div className="mt-10">
                    {isLoading ? (
                        <div role="status" className="flex justify-center py-20">
                            <CircularProgress aria-label="Loading award categories" />
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center py-20 text-center">
                            <ErrorOutlineIcon fontSize="large" className="text-gold" aria-hidden />
                            <h3 className="mt-4 font-heading text-base text-white">Unable to load categories</h3>
                            <p className="mt-2 max-w-md text-sm text-white/60">
                                Something went wrong while fetching the categories. Please check your connection and try again.
                            </p>
                            <Button onClick={refetch} variant="contained" sx={{ mt: 3 }}>
                                Try Again
                            </Button>
                        </div>
                    ) : sorted.length === 0 ? (
                        <div className="py-20 text-center">
                            <h3 className="font-heading text-base text-white">No categories available</h3>
                            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
                                Award categories haven&apos;t been listed yet. Please check back soon.
                            </p>
                        </div>
                    ) : limited.length === 0 ? (
                        <div className="py-20 text-center">
                            <h3 className="font-heading text-base text-white">No categories match your search</h3>
                            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">Try a different search term.</p>
                            <Button
                                onClick={() => {
                                    setQuery("");
                                    setCurrentPage(1);
                                }}
                                variant="contained"
                                sx={{ mt: 3 }}
                            >
                                Reset Search
                            </Button>
                        </div>
                    ) : (
                        <>
                            <p role="status" className="sr-only">
                                {limited.length} categories shown
                            </p>

                            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {visible.map((category) => (
                                    <li key={category.category_id}>
                                        <button
                                            type="button"
                                            onClick={() => openModal(category)}
                                            className="group flex h-full min-h-64 w-full flex-col rounded-2xl border border-white/10 bg-surface p-6 text-left transition-colors hover:border-gold/60 focus-visible:outline-2 focus-visible:outline-gold"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-md bg-gold/15 text-gold">
                          <EmojiEventsOutlinedIcon aria-hidden />
                        </span>
                                                <span
                                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                                                        category.nominees.length > 0
                                                            ? "bg-gold text-black"
                                                            : "border border-white/20 text-white/60"
                                                    }`}
                                                >
                          {category.nominees.length > 0
                              ? `${category.nominees.length} Nominee${category.nominees.length === 1 ? "" : "s"}`
                              : "Nominees TBA"}
                        </span>
                                            </div>

                                            <h3 className="mt-5 font-heading text-base uppercase leading-tight text-white">
                                                {category.category_title}
                                            </h3>
                                            <p className="mt-3 line-clamp-3 text-sm text-white/60">{category.description}</p>

                                            <span className="mt-auto flex items-center gap-1 pt-6 font-mono text-xs uppercase tracking-wider text-gold">
                        View Details
                        <ArrowForwardIcon
                            sx={{ fontSize: 14 }}
                            className="transition-transform motion-safe:group-hover:translate-x-1"
                            aria-hidden
                        />
                      </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {viewAllButton && (
                                <div className="mt-10 flex justify-center">
                                    <Button href={VIEW_ALL_HREF} variant="contained" size="large">
                                        View All Categories
                                    </Button>
                                </div>
                            )}

                            {showPagination && totalPages > 1 && (
                                <nav aria-label="Categories pagination" className="mt-10 flex items-center justify-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage(page - 1)}
                                        disabled={page === 1}
                                        aria-label="Previous page"
                                        className={`${pageButtonClass} text-gold hover:bg-white/10`}
                                    >
                                        <ChevronLeftIcon fontSize="small" />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setCurrentPage(p)}
                                            aria-label={`Page ${p}`}
                                            aria-current={p === page ? "page" : undefined}
                                            className={`${pageButtonClass} ${
                                                p === page ? "bg-gold text-black" : "text-white/70 hover:bg-white/10"
                                            }`}
                                        >
                                            {p}
                                        </button>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage(page + 1)}
                                        disabled={page === totalPages}
                                        aria-label="Next page"
                                        className={`${pageButtonClass} text-gold hover:bg-white/10`}
                                    >
                                        <ChevronRightIcon fontSize="small" />
                                    </button>
                                </nav>
                            )}
                        </>
                    )}
                </div>

            </div>
            {selected && (
                <AwardCategoryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    category={selected}
                />
            )}

        </section>
    );
}