import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
  className?: string;
}

export const IconButton = (props: Props) => {
  const {
    className,
    variant = "plain",
    corners = "default",
    color = "normal",
    size = "md",
    children,
    ...restProps
  } = props;

  const { isDark } = useTheme();

  return (
    <button
      className={`${className !== undefined ? className + " " : ""}${styles["kicon-button"]} ${styles[`kicon-button__${variant}`]} corners__${corners} ${styles[`kicon-button__${color}__${isDark ? "dark" : "light"}`]} size__${size} ${styles["kicon-button"]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};
