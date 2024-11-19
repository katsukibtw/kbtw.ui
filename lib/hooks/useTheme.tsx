import { defaultPreset } from "@/styles/defaultPreset";
import { createContext, useContext } from "react";

export interface ColorShading {
  "0": string; // brightest, almost white
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string; // darkest, almost black
}

export interface PermanentColors {
  destructive: ColorShading;
  warning: ColorShading;
  error: ColorShading;
  calm: ColorShading;
}

export interface Theme extends PermanentColors {
  primary: ColorShading;
  secondary: ColorShading;
  normal: ColorShading;
}

export type ThemePresetDef = "default" | "aqua" | "generated";

export interface ThemeContextDef {
  preset: ThemePresetDef;
  isDark: boolean;
  currentTheme: Theme;
  toggleDarkTheme: () => void;
  switchPreset: () => void;
}

export const ThemeContext = createContext<ThemeContextDef>({
  preset: "default",
  isDark: true,
  currentTheme: defaultPreset,
  toggleDarkTheme: () => {},
  switchPreset: () => {},
});

export const useTheme = () => useContext(ThemeContext);
