import { ColorTypesDef, SizeTypesDef } from "@/styles/globalDefs";
import styles from "./styles.module.scss";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  className?: string;
  size?: SizeTypesDef;
  strokeWidth?: number | string;
  color?: ColorTypesDef;
  error?: boolean;
  value: number;
}

export const CircleProgress = (props: Props) => {
  const {
    className = "",
    size = "md",
    strokeWidth,
    color = "secondary",
    error = false,
    value,
  } = props;

  const { isDark } = useTheme();

  const dashArrayByValue = (value: number) => `${value} ${100 - value}`;

  return (
    <div
      className={`${className === "" ? className : className + " "}${styles["circle-progress__wrapper"]}${error ? " " + styles["circle-progress__error"] : ""} ${styles[`size__${size}`]} ${styles[`circle-progress__${error ? "error" : color}__${isDark ? "dark" : "light"}`]}`}
    >
      <div className={styles["circle-progress__base"]}>
        <svg className={styles["circle-progress__base__svg"]}>
          <rect
            pathLength={"100"}
            className={styles["circle-progress__base__bg-rect"]}
          />
          <rect
            pathLength={"100"}
            className={styles["circle-progress__base__rect"]}
            style={{
              strokeWidth,
              animationDuration:
                size === "md"
                  ? "1500ms"
                  : "calc(abs(1500ms * (1 - var(--size-multiplier, 1))))",
              strokeDasharray: dashArrayByValue(value),
            }}
          />
        </svg>
      </div>
    </div>
  );
};
