"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchAwardCategories } from "@/services/awardsService";
import type { AwardCategory } from "@/types/awards";

export function useAwardCategories() {
    const [data, setData] = useState<AwardCategory[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        fetchAwardCategories(controller.signal)
            .then(setData)
            .catch((e: unknown) => {
                if (controller.signal.aborted) return;
                setError(e instanceof Error ? e : new Error("Request failed"));
            })
            .finally(() => {
                if (!controller.signal.aborted) setIsLoading(false);
            });

        return () => controller.abort();
    }, [attempt]);

    const refetch = useCallback(() => {
        setError(null);
        setIsLoading(true);
        setAttempt((a) => a + 1);
    }, []);

    return { data, isLoading, error, refetch };
}