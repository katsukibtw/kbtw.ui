import { forwardRef, SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
}

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    className,
    variant = "soft",
    corners = "default",
    color = "primary",
    size = "md",
    ...restProps
  } = props;

  const { isDark } = useTheme();

  return (
    <select
      className={`${className !== undefined ? className + " " : ""}${styles[`kselect__${variant}`]} ${styles[`corners__${corners}`]} ${styles[`kselect__${color}__${isDark ? "dark" : "light"}`]} ${styles[`size__${size}`]} ${styles["kselect"]}`}
      ref={ref}
      {...restProps}
    />
  );
});
