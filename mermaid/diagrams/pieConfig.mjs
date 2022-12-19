import { base } from "../baseStyles.mjs";
import { spectrum } from "../spectrumStyles.mjs";
import {adjust} from "khroma";

export const pieConfig = {
  useWidth: base.useWidth,
  useMaxWidth: base.useMaxWidth,
}

export const pieVariables = {
  pie1: base.primaryColor.toString(),
  pie2: base.secondaryColor.toString(),
  pie3: base.tertiaryColor.toString(),
  pie4: adjust(base.primaryColor.toString(), { h: 120, l: -10 }),
  pie5: adjust(base.secondaryColor.toString(), { l: -10 }),
  pie6: adjust(base.tertiaryColor.toString(), { l: -10 }),
  pie7: adjust(base.primaryColor.toString(), { h: 60, l: -10 }),
  pie8: adjust(base.primaryColor.toString(), { h: -60, l: -10 }),
  pie9: adjust(base.primaryColor.toString(), { h: 120, l: 0 }),
  pie10: adjust(base.primaryColor.toString(), { h: 60, l: -20 }),
  pie11: adjust(base.primaryColor.toString(), { h: -60, l: -20 }),
  pie12: adjust(base.primaryColor.toString(), { h: 120, l: -10 }),
}

export const pieOptions = {
  pieStrokeColor: spectrum.Red1000,
  pieStrokeWidth: '1px',
  pieOpacity: '0.8',
  pieTitleTextSize: '18px',
  pieTitleTextColor: spectrum.Purple1000,
  pieFontFamily: spectrum.FontFamilyBase,
  pieSectionTextColor: spectrum.Gray900,
  pieSectionTextSize: '12px',
  pieLegendTextSize: '12px',
  pieLegendTextColor: spectrum.Fuchsia900,
}

export const getPieStyles = (pieOptions) => `
  .pieCircle {
    stroke: ${pieOptions.pieStrokeColor};
    stroke-width : ${pieOptions.pieStrokeWidth};
    opacity : ${pieOptions.pieOpacity};
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${pieOptions.pieTitleTextSize};
    fill: ${pieOptions.pieTitleTextColor};
    font-family: ${pieOptions.pieFontFamily};
  }
  .slice {
    font-family: ${pieOptions.pieFontFamily};
    fill: ${pieOptions.pieSectionTextColor};
    font-size:${pieOptions.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${pieOptions.pieLegendTextColor};
    font-family: ${pieOptions.pieFontFamily};
    font-size: ${pieOptions.pieLegendTextSize};
  }
`;
