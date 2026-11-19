import { createTheme } from "@mui/material/styles";

const headingFont = "var(--font-poppins), system-ui, sans-serif";
const bodyFont = "var(--font-open-sans), system-ui, sans-serif";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#C59B25", light: "#D6AE42", contrastText: "#000000" },
        background: { default: "#000000", paper: "#000000" },
        text: { primary: "#FFFFFF", secondary: "#A3A3A3" },
    },
    typography: {
        fontFamily: bodyFont,
        h1: { fontFamily: headingFont },
        h2: { fontFamily: headingFont },
        h3: { fontFamily: headingFont },
        h4: { fontFamily: headingFont },
        button: { fontFamily: headingFont, textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { borderRadius: 9999 } },
        },
    },
});