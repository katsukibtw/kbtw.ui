import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import {
  ColorTypesDef,
  CornersTypesDef,
  VariantTypesDef,
  CSSPropsDef,
} from "@/styles/globalDefs";
import { useTheme } from "@/hooks/useTheme";

interface Props extends HTMLAttributes<HTMLDivElement>, CSSPropsDef {
  variant?: VariantTypesDef;
  corners?: CornersTypesDef;
  color?: ColorTypesDef;
}

export const Surface = (props: Props) => {
  const {
    className,
    variant = "plain",
    corners = "default",
    color = "normal",
    style,
    display,
    m,
    p,
    w,
    h,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    lineHeight,
    bg,
    textColor,
    flex,
    flexBasis,
    flexGap,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    alignContent,
    alignItems,
    alignSelf,
    inset,
    top,
    bottom,
    left,
    right,
    position,
    justifyContent,
    justifyItems,
    justifySelf,
    float,
    fontFamily,
    fontWeight,
    fontSize,
    fontStyle,
    border,
    borderColor,
    borderRadius,
    ...restProps
  } = props;

  const { isDark } = useTheme();

  return (
    <div
      className={`${className !== undefined ? className + " " : ""}${styles["ksurface"]}  ${styles[`ksurface__${corners}`]} ${styles[`ksurface__${variant}`]} ${styles[`ksurface__${color}__${isDark ? "dark" : "light"}`]}`}
      style={{
        margin: m,
        padding: p,
        width: w,
        height: h,
        background: bg,
        color: textColor,
        gap: flexGap,
        display,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        lineHeight,
        flex,
        flexBasis,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        alignContent,
        alignItems,
        alignSelf,
        inset,
        top,
        bottom,
        left,
        right,
        position,
        justifyContent,
        justifyItems,
        justifySelf,
        float,
        fontFamily,
        fontWeight,
        fontSize,
        fontStyle,
        border,
        borderColor,
        borderRadius,
        ...style,
      }}
      {...restProps}
    />
  );
};
