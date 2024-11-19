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
  let isDarkFromLS = localStorage.getItem("kbtw-ui-isdark");

  (() => {
    if (isDarkFromLS === null) {
      localStorage.setItem("kbtw-ui-isdark", String(defaultDark));
      isDarkFromLS = String(defaultDark);
    }
  })();

  const [preset] = useState<ThemePresetDef>("default");
  const [isDark, setIsDark] = useState<boolean>(
    String(isDarkFromLS).toLowerCase() === "true",
  );
  const [currentTheme] = useState<Theme>(defaultPreset);

  const toggleDarkTheme = () => {
    localStorage.setItem("kbtw-ui-isdark", String(!isDark));
    setIsDark(!isDark);
  };

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
