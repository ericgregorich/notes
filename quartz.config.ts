import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Eric's Notes",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible"
    },
    baseUrl: "notes.ericgregorich.com",
    ignorePatterns: ["Private", "Templates", ".obsidian", "Copilot", "Blog", "Canvas", "Newsletter"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Helvetica Neue",
        body: "Nunito",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eef0f3",
          lightgray: "#dadfe7",
          gray: "#69778b",
          darkgray: "#1f1f1f",
          dark: "#69778b",
          secondary: "#0e5e8c",
          tertiary: "#803F12",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#1b1c1d",
          lightgray: "#29292a",
          gray: "#969696",
          darkgray: "#d5d5d5",
          dark: "#ebebec",
          secondary: "#3d98dd",
          tertiary: "#CA7107",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
