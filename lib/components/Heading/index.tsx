import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { ColorTypesDef } from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

export type HeadingLevelDef = "h1" | "h2" | "h3" | "h4" | "h5";

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: ColorTypesDef;
  level?: HeadingLevelDef;
}

export const Heading = (props: Props) => {
  const { className, level = "h1", color = "normal", ...restProps } = props;

  const { isDark } = useTheme();

  return (
    <div
      className={`${className !== undefined ? className + " " : ""}${styles["kheading"]} ${styles[`kheading__${level}`]} ${styles[`kheading__${color}__${isDark ? "dark" : "light"}`]}`}
      {...restProps}
    />
  );
};
