import {pieOptions, getPieStyles} from "./diagrams/pieConfig.mjs";
import {classOptions, getClassStyles} from "./diagrams/classConfig.mjs";

export const themeCSS = `
  ${getPieStyles(pieOptions)},
  ${getClassStyles(classOptions)},
`;
