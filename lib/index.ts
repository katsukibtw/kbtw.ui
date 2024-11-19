// components
export { Button } from "./components/Button/index.tsx";
export { ButtonGroup } from "./components/ButtonGroup/index.tsx";
export { IconButton } from "./components/IconButton/index.tsx";
export { ThemeProvider } from "./components/ThemeProvider/index.tsx";
export { Input } from "./components/Input/index.tsx";
export { Surface } from "./components/Surface/index.tsx";
export { Heading } from "./components/Heading/index.tsx";
export { Checkbox } from "./components/Checkbox/index.tsx";
export { Switch } from "./components/Switch/index.tsx";
export { CircleLoader } from "./components/CircleLoader/index.tsx";
export { CircleProgress } from "./components/CircleProgress/index.tsx";
export { SlideLoader } from "./components/SlideLoader/index.tsx";
export { SlideProgress } from "./components/SlideProgress/index.tsx";

// hooks
export { useTheme } from "./hooks/useTheme.tsx";

// types
export type {
  VariantTypesDef,
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
} from "./styles/globalDefs.ts";

export type { HeadingLevelDef } from "./components/Heading/index.tsx";

export type {
  ColorShading,
  Theme,
  PermanentColors,
} from "./hooks/useTheme.tsx";
