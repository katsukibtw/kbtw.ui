import { forwardRef } from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  className?: string;
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
  onChange?: () => void;
  defaultChecked?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    variant = "solid",
    corners = "rounded",
    color = "primary",
    size = "md",
    defaultChecked = false,
    onChange,
  } = props;

  const { isDark } = useTheme();

  return (
    <label
      className={`${className !== undefined ? className + " " : ""}${styles[`kswitch__${variant}`]} ${styles[`kswitch__${corners}`]} ${styles[`kswitch__${color}__${isDark ? "dark" : "light"}`]} ${styles[`size__${size}`]} ${styles["kswitch"]}`}
    >
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
        ref={ref}
      />
    </label>
  );
});
