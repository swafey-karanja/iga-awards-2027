"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HeroUIProvider } from "@heroui/system";
import { theme } from "@/lib/theme";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <HeroUIProvider>
                    <SmoothScroll />
                    {children}
                </HeroUIProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}