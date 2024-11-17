import { PermanentColors, Theme } from "../hooks/useTheme";

const permanentColors: PermanentColors = {
  warning: {
    "0": "#fff8f0",
    "50": "#ffead2",
    "100": "#ffdbb3",
    "200": "#ffcc93",
    "300": "#ffbd71",
    "400": "#feb55e",
    "500": "#dd9d51",
    "600": "#80592b",
    "700": "#63441f",
    "800": "#473014",
    "900": "#2d1d0a",
  },
  error: {
    "0": "#fff2ed",
    "50": "#ffd6c9",
    "100": "#ffbba6",
    "200": "#ff9e82",
    "300": "#ff7f5d",
    "400": "#ff6f48",
    "500": "#de603d",
    "600": "#80341f",
    "700": "#632716",
    "800": "#481a0d",
    "900": "#2e0e06",
  },
  calm: {
    "0": "#f5effc",
    "50": "#e2cff4",
    "100": "#cfaeec",
    "200": "#bd8ee3",
    "300": "#aa6dd8",
    "400": "#a15bd3",
    "500": "#8b4eb7",
    "600": "#623582",
    "700": "#4e2969",
    "800": "#3c1e51",
    "900": "#2a133a",
  },
};

export const defaultPreset: Theme = {
  ...permanentColors,
  primary: {
    "0": "#fdf3ea",
    "50": "#f8dbc0",
    "100": "#f3c397",
    "200": "#efab6d",
    "300": "#ea9244",
    "400": "#e57a1a",
    "500": "#bb6415",
    "600": "#924e10",
    "700": "#68380c",
    "800": "#3e2107",
    "900": "#150b02",
  },
  secondary: {
    "0": "#eff8f6",
    "50": "#ceebe5",
    "100": "#adddd4",
    "200": "#8cd0c2",
    "300": "#6bc2b1",
    "400": "#4ab5a0",
    "500": "#3d9483",
    "600": "#2f7366",
    "700": "#225249",
    "800": "#14312c",
    "900": "#07100e",
  },
  normal: {
    "0": "#fdfbf8",
    "50": "#c9c9c9",
    "100": "#afafaf",
    "200": "#969696",
    "300": "#7d7d7d",
    "400": "#666666",
    "500": "#393939",
    "600": "#303030",
    "700": "#252525",
    "800": "#1b1b1b",
    "900": "#121212",
  },
};