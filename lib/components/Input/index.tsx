import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    variant = "outlined",
    corners = "default",
    color = "primary",
    size = "md",
    ...restProps
  } = props;

  const { isDark } = useTheme();

  return (
    <input
      className={`${className !== undefined ? className + " " : ""}${styles[`kinput__${variant}`]} ${styles[`corners__${corners}`]} ${styles[`kinput__${color}__${isDark ? "dark" : "light"}`]} ${styles[`size__${size}`]} ${styles["kinput"]}`}
      ref={ref}
      {...restProps}
    />
  );
});
