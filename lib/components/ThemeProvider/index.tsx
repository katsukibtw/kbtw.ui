import { PropsWithChildren, useState } from "react";
import "./styles.css";
import { defaultPreset } from "@/styles/defaultPreset";
import {
  Theme,
  ThemeContext,
  ThemeContextDef,
  ThemePresetDef,
} from "@/hooks/useTheme";

interface Props extends PropsWithChildren {
  defaultDark?: boolean;
}

export const ThemeProvider = ({ children, defaultDark = true }: Props) => {
  const [preset] = useState<ThemePresetDef>("default");
  const [isDark, setIsDark] = useState<boolean>(defaultDark);
  const [currentTheme] = useState<Theme>(defaultPreset);

  const toggleDarkTheme = () => setIsDark(!isDark);

  // this does nothing for now
  const switchPreset = () => {};

  return (
    <ThemeContext.Provider
      value={
        {
          preset: preset,
          isDark: isDark,
          currentTheme: currentTheme,
          toggleDarkTheme: toggleDarkTheme,
          switchPreset: switchPreset,
        } as ThemeContextDef
      }
    >
      <div className={`kprovider__${isDark ? "dark" : "light"} kprovider`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
