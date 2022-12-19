import {visit} from "unist-util-visit";
import {toString} from "mdast-util-to-string";

export function remarkHeadingsPlugin() {
  return async function transformer(tree, file) {
    let headings = [];

    visit(tree, `heading`, (heading) => {
      heading.depth = undefined;
      headings.push({
        value: toString(heading),
        depth: heading.depth,
      });
    });

    const mdxFile = file;
    if (!mdxFile.data.meta) {
      mdxFile.data.meta = {};
    }

    mdxFile.data.meta.headings = headings;
  };
}
