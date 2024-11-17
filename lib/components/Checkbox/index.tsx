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

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    variant = "solid",
    corners = "default",
    color = "primary",
    size = "md",
    defaultChecked = false,
    onChange,
  } = props;

  const { isDark } = useTheme();

  return (
    <label
      className={`${className !== undefined ? className + " " : ""}${styles["kcheckbox"]} ${styles[`size__${size}`]} ${styles[`kcheckbox__${variant}`]} ${styles[`kcheckbox__${corners}`]} ${styles[`kcheckbox__${color}__${isDark ? "dark" : "light"}`]}`}
    >
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
        ref={ref}
      />
      <svg viewBox="0 0 24 24" className={styles["kcheckbox__svg"]}>
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 8l-1.41-1.41" />
      </svg>
    </label>
  );
});
