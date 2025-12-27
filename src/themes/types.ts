export interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
}

export interface ThemeTypography {
    fontFamily: string;
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
}

export interface ThemeConfig {
    colors: ThemeColors;
    typography: ThemeTypography;
    spacing: Record<string, string>;
    borderRadius: Record<string, string>;
    shadows: Record<string, string>;
} 