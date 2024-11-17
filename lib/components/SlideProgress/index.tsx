import { ColorTypesDef } from "@/styles/globalDefs";
import styles from "./styles.module.scss";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  className?: string;
  length?: number | string;
  strokeWidth?: number | string;
  color?: ColorTypesDef;
  error?: boolean;
  value: number;
}

export const SlideProgress = (props: Props) => {
  const {
    className = "",
    length,
    strokeWidth,
    color = "secondary",
    error = false,
    value,
  } = props;

  const { isDark } = useTheme();

  return (
    <div
      className={`${className === "" ? className : className + " "}${styles["slide-progress"]} ${error ? styles["slide-progress__error"] + " " : ""}${styles["slide-progress__wrapper"]} ${styles[`slide-progress__${error ? "error" : color}__${isDark ? "dark" : "light"}`]}`}
      style={{
        width: length,
      }}
    >
      <div
        className={styles["slide-progress__base"]}
        style={{ height: strokeWidth }}
      >
        <div
          className={styles["slide-progress__slide"]}
          style={{ height: strokeWidth, width: `${value}%` }}
        />
      </div>
    </div>
  );
};
