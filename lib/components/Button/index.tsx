import { ButtonHTMLAttributes, ReactNode } from "react";
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
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  className?: string;
}

export const Button = (props: Props) => {
  const {
    className,
    variant = "solid",
    corners = "default",
    color = "primary",
    size = "md",
    startDecorator,
    endDecorator,
    children,
    ...restProps
  } = props;

  const { isDark } = useTheme();

  return (
    <button
      className={`${className !== undefined ? className + " " : ""}${styles["kbutton"]} ${styles[`kbutton__${variant}`]} corners__${corners} ${styles[`kbutton__${color}__${isDark ? "dark" : "light"}`]} size__${size} ${styles["kbutton"]}`}
      {...restProps}
    >
      {startDecorator && (
        <div className={styles["kbutton__decorator"]}>{startDecorator}</div>
      )}
      {children}
      {endDecorator && (
        <div className={styles["kbutton__decorator"]}>{endDecorator}</div>
      )}
    </button>
  );
};
