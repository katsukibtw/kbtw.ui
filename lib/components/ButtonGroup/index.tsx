import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { useTheme } from "@/hooks/useTheme";

interface Props extends PropsWithChildren {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const ButtonGroup = ({
  className,
  variant = "solid",
  corners = "default",
  color = "primary",
  size = "md",
  orientation = "horizontal",
  children,
}: Props) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${className !== undefined ? className + " " : ""}${styles[`kbuttongroup__${variant}`]} corners__${corners} ${styles[`kbuttongroup__${color}__${isDark ? "dark" : "light"}`]} size__${size} ${styles["kbuttongroup"]}`}
      style={{
        flexDirection: orientation === "horizontal" ? "row" : "column",
      }}
    >
      {children}
    </div>
  );
};
