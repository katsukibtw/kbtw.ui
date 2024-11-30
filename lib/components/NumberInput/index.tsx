import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  SizeTypesDef,
  VariantTypesDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
  size?: SizeTypesDef;
  onChange?: () => void;
}

export const NumberInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    variant = "outlined",
    corners = "default",
    color = "primary",
    size = "md",
    onChange,
    ...restProps
  } = props;

  const { isDark } = useTheme();

  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => innerRef.current!, []);

  return (
    <div
      className={`${className !== undefined ? className + " " : ""}${styles[`knuminput__${variant}`]} corners__${corners} ${styles[`knuminput__${color}__${isDark ? "dark" : "light"}`]} size__${size} ${styles["knuminput"]}`}
    >
      <input
        className={styles["knuminput__input"]}
        ref={innerRef}
        type="number"
        {...restProps}
        onChange={onChange}
      />
      <div className={styles["knuminput__btnwrapper"]}>
        <button
          className={styles["knuminput__btn"]}
          onClick={() => {
            onChange?.();
            innerRef.current!.value = String(
              Number(innerRef.current!.value) + 1,
            );
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
        </button>
        <button
          className={styles["knuminput__btn"]}
          onClick={() => {
            onChange?.();
            innerRef.current!.value = String(
              Number(innerRef.current!.value) - 1,
            );
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
