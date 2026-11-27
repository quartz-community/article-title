import { describe, expect, it } from "vitest";
import type { QuartzComponentProps } from "@quartz-community/types";
import { ArticleTitle } from "../src/index";
import { renderToHtml } from "./render";

const render = (frontmatter?: Record<string, unknown>, displayClass?: string) =>
  renderToHtml(
    ArticleTitle()({
      fileData: { frontmatter },
      cfg: {},
      displayClass,
    } as unknown as QuartzComponentProps),
  );

describe("ArticleTitle", () => {
  it("renders the frontmatter title as the page heading, with Obsidian's inline-title class", () => {
    expect(render({ title: "Tom & Jerry <3" })).toBe(
      '<h1 class="article-title inline-title">Tom &amp; Jerry &lt;3</h1>',
    );
  });

  it("adds the layout's display class", () => {
    expect(render({ title: "T" }, "desktop-only")).toBe(
      '<h1 class="desktop-only article-title inline-title">T</h1>',
    );
  });

  it("renders nothing without a title", () => {
    expect(render({})).toBe("");
    expect(render(undefined)).toBe("");
    expect(render({ title: "" })).toBe("");
  });

  it("ships its CSS", () => {
    expect(ArticleTitle().css).toContain(".article-title");
  });
});
