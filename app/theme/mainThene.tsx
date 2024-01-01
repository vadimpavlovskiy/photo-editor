import { ThemeProvider } from "styled-components";
import { lightTheme } from "./lightTheme/lightTheme";

export const Theme = ({children}:any) => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
)