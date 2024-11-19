export type VariantTypesDef = "solid" | "plain" | "soft" | "outlined";

export type ColorTypesDef =
  | "primary"
  | "secondary"
  | "normal"
  | "warning"
  | "destructive"
  | "error"
  | "calm";

export type CornersTypesDef = "default" | "squared" | "rounded";

export type SizeTypesDef = "xsm" | "sm" | "md" | "lg" | "xlg";

export type CSSDefaultVariants =
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export type CSSDisplayDef =
  | CSSDefaultVariants
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "flow-root"
  | "none"
  | "contents"
  | "table"
  | "table-row";

export type CSSAlignDef =
  | CSSDefaultVariants
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "self-start"
  | "self-end"
  | "anchor-center"
  | "baseline"
  | "first baseline"
  | "last baseline" /* Overflow alignment (for positional alignment only) */
  | "safe center"
  | "unsafe center";

export type CSSPositionDef =
  | CSSDefaultVariants
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky";

export type CSSJustifyDef =
  | CSSDefaultVariants
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe center"
  | "unsafe center";

export type CSSFlexBasisDef =
  | CSSDefaultVariants
  | "max-content"
  | "min-content"
  | "fit-content"
  | "content";

export type CSSFlexDirectionDef =
  | CSSDefaultVariants
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type CSSFlexFlowDef =
  | CSSDefaultVariants
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse"
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "row nowrap"
  | "column wrap"
  | "column-reverse wrap-reverse";

export type CSSFlexGrowShrinkDef = CSSDefaultVariants;

export type CSSFlexWrapDef =
  | CSSDefaultVariants
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type CSSFloatDef =
  | CSSDefaultVariants
  | "left"
  | "right"
  | "none"
  | "inline-start"
  | "inline-end";

export type CSSFontStyleDef =
  | CSSDefaultVariants
  | "normal"
  | "italic"
  | "oblique";

export interface CSSPropsDef {
  display?: CSSDisplayDef;
  m?: number | string;
  p?: number | string;
  w?: number | string;
  h?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  lineHeight?: number | string;
  bg?: string;
  textColor?: string;
  flex?: string;
  flexBasis?: string | CSSFlexBasisDef;
  flexGap?: number | string;
  flexDirection?: CSSFlexDirectionDef;
  flexGrow?: number | CSSFlexGrowShrinkDef;
  flexShrink?: number | CSSFlexGrowShrinkDef;
  flexWrap?: CSSFlexWrapDef;
  alignContent?: CSSAlignDef;
  alignItems?: CSSAlignDef;
  alignSelf?: CSSAlignDef;
  inset?: number | string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  position?: CSSPositionDef;
  justifyContent?: CSSJustifyDef;
  justifyItems?: CSSJustifyDef;
  justifySelf?: CSSJustifyDef;
  float?: CSSFloatDef;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number | string;
  fontStyle?: CSSFontStyleDef;
  border?: string;
  borderColor?: string;
  borderRadius?: number | string;
}
