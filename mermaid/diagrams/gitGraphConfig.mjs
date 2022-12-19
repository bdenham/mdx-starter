import { base } from "../baseStyles.mjs";

export const gitGraphConfig = {
  useWidth: base.useWidth,
  useMaxWidth: base.useMaxWidth,
  arrowMarkerAbsolute: false,
  titleTopMargin: 25,
  diagramPadding: 20,
  nodeLabel: {
    width: 75,
    height: 100,
    x: -25,
    y: 5,
  },
  mainBranchName: 'main',
  mainBranchOrder: 0,
  showCommitLabel: true,
  showBranches: true,
  rotateCommitLabel: true,
}
