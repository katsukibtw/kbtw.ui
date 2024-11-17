import { ColorTypesDef } from "@/styles/globalDefs";
import styles from "./styles.module.scss";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  className?: string;
  length?: number | string;
  strokeWidth?: number | string;
  color?: ColorTypesDef;
  type?: 1 | 2;
  error?: boolean;
}

export const SlideLoader = (props: Props) => {
  const {
    className = "",
    length,
    strokeWidth,
    color = "secondary",
    type = 1,
    error = false,
  } = props;

  const { isDark } = useTheme();

  return (
    <div
      className={`${className === "" ? className : className + " "}${styles["slide-loader"]} ${error ? styles["slide-loader__error"] + " " : ""}${styles["slide-loader__wrapper"]} ${styles[`slide-loader__${error ? "error" : color}__${isDark ? "dark" : "light"}`]}`}
      style={{
        width: length,
      }}
    >
      <div
        className={styles["slide-loader__base"]}
        style={{ height: strokeWidth }}
      >
        <div
          className={`${styles["slide-loader__slide"]} ${error ? "" : styles[`slide-loader__slide__${type}`]}`}
          style={{ height: strokeWidth }}
        />
      </div>
    </div>
  );
};
