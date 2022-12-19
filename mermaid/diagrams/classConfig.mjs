import { base } from "../baseStyles.mjs";
import { spectrum } from "../spectrumStyles.mjs";

export const classConfig = {
  useWidth: base.useWidth,
  useMaxWidth: base.useMaxWidth,
  titleTopMargin: 25,
  arrowMarkerAbsolute: false,
  dividerMargin: 10,
  padding: 45,
  textHeight: 40,
}

const classOverride = {
  nodeBorder: spectrum.Blue900,
}

export const classOptions = {
  nodeBorderClass: classOverride.nodeBorder || base.nodeBorder,
  classText: base.classText,
  fontFamilyClass: base.fontFamily,
  mainBkgClass: base.mainBkg,
  lineColorClass: base.lineColor,
  textColorClass: base.textColor,
}

export const getClassStyles = (classOptions) => `
  g.classGroup text {
  fill: ${classOptions.nodeBorderClass};
  fill: ${classOptions.classText};
  stroke: none;
  font-family: ${classOptions.fontFamilyClass};
  font-size: 10px;
  .title {
    font-weight: bolder;
  }
}
.nodeLabel, .edgeLabel {
  color: ${classOptions.classText};
}
.edgeLabel .label rect {
  fill: ${classOptions.mainBkgClass};
}
.label text {
  fill: ${classOptions.classText};
}
.edgeLabel .label span {
  background: ${classOptions.mainBkgClass};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${classOptions.mainBkgClass};
    stroke: ${classOptions.nodeBorderClass};
    stroke-width: 1px;
  }


.divider {
  stroke: ${classOptions.nodeBorderClass};
  stroke: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${classOptions.mainBkgClass};
  stroke: ${classOptions.nodeBorderClass};
}

g.classGroup line {
  stroke: ${classOptions.nodeBorderClass};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${classOptions.mainBkgClass};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${classOptions.nodeBorderClass};
  font-size: 10px;
}

.relation {
  stroke: ${classOptions.lineColorClass};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${classOptions.lineColorClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${classOptions.lineColorClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${classOptions.lineColorClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${classOptions.lineColorClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${classOptions.mainBkgClass} !important;
  stroke: ${classOptions.lineColorClass} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${classOptions.textColorClass};
}
`;

