import { ColorTypesDef, SizeTypesDef } from "@/styles/globalDefs";
import styles from "./styles.module.scss";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  className?: string;
  size?: SizeTypesDef;
  strokeWidth?: number | string;
  color?: ColorTypesDef;
  type?: 1 | 2 | 3 | 4;
  error?: boolean;
}

export const CircleLoader = (props: Props) => {
  const {
    className = "",
    size = "md",
    strokeWidth,
    color = "secondary",
    type = 1,
    error = false,
  } = props;

  const dasharray = ["50 50", "85 15", "40 10", "30 20"];

  const { isDark } = useTheme();

  return (
    <div
      className={`${className === "" ? className : className + " "}${styles["circle-loader__wrapper"]}${error ? " " + styles["circle-loader__error"] : ""} ${styles[`size__${size}`]} ${styles[`circle-loader__${error ? "error" : color}__${isDark ? "dark" : "light"}`]}`}
    >
      <div className={styles["circle-loader__base"]}>
        <svg className={styles["circle-loader__base__svg"]}>
          <rect
            pathLength={"100"}
            className={styles["circle-loader__base__bg-rect"]}
          />
          <rect
            pathLength={"100"}
            className={styles["circle-loader__base__rect"]}
            style={{
              strokeWidth,
              animationDuration:
                size === "md"
                  ? "1500ms"
                  : "calc(abs(1500ms * (1 - var(--size-multiplier, 1))))",
              strokeDasharray: dasharray[type - 1],
            }}
          />
        </svg>
      </div>
    </div>
  );
};
