import { completion } from "yargs"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "ABOUT ME": "https://ericgregorich.com",
      "NOTES": "https://notes.ericgregorich.com",
      "BLOG": "https://blog.ericgregorich.com",
      "RSS": "https://notes.ericgregorich.com/index.xml"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList()
  ],
  left: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),
    Component.Darkmode()
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
    Component.RecentNotes()
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle()
  ],
  left: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}