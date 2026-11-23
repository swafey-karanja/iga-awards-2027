import type { AwardCategory } from "@/types/awards";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://backend.igasummit.com/api/";
const CATEGORIES_PATH = "awards/categories"; // PLACEHOLDER: replace with the real endpoint

function parseCategory(value: unknown): AwardCategory | null {
    if (typeof value !== "object" || value === null) return null;
    const v = value as Record<string, unknown>;
    if (
        typeof v.category_id !== "number" ||
        typeof v.category_title !== "string" ||
        typeof v.description !== "string"
    ) {
        return null;
    }
    return {
        category_id: v.category_id,
        category_title: v.category_title.trim(),
        description: v.description.trim(),
        priority: typeof v.priority === "number" ? v.priority : 0,
        nominees: Array.isArray(v.nominees) ? v.nominees : [],
    };
}

export async function fetchAwardCategories(signal?: AbortSignal): Promise<AwardCategory[]> {
    const response = await fetch(`${API_BASE_URL}${CATEGORIES_PATH}`, {
        headers: { Accept: "application/json" },
        signal,
    });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const data: unknown = await response.json();
    if (!Array.isArray(data)) throw new Error("Unexpected response format");

    return data.map(parseCategory).filter((c): c is AwardCategory => c !== null);
}