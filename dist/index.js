import { jsx } from 'preact/jsx-runtime';

// src/util/lang.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var ArticleTitle = ({ fileData, displayClass }) => {
  const title = fileData.frontmatter?.title;
  if (title) {
    return /* @__PURE__ */ jsx("h1", { class: classNames(displayClass, "article-title"), children: title });
  } else {
    return null;
  }
};
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;
var ArticleTitle_default = (() => ArticleTitle);

export { ArticleTitle_default as ArticleTitle };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map