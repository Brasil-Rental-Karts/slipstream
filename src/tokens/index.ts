export const colors = {
  primary: "#F47820",
  secondary: "#5A5A5A",
  success: "#16A34A",
  destructive: "#EC221F",
  background: "#FFFFFF",
  foreground: "#111827",
} as const;

export const typography = {
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
  scale: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
    "3xl": 48,
  },
} as const;

export const spacing = [4, 8, 12, 16, 24, 32, 48] as const;

export const radii = {
  lg: "0.5rem",
} as const;

export const shadows = {
  soft: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 0 rgb(0 0 0 / 0.1)",
} as const;

export type ColorToken = keyof typeof colors;
export type TypographyScaleToken = keyof typeof typography.scale;

