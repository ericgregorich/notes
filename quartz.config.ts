import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Eric's Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible"
    },
    baseUrl: "notes.ericgregorich.com",
    ignorePatterns: ["private", "templates", ".obsidian", "copilot", "blog", "canvas"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Roboto",
        body: "Lora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f7f4",
          lightgray: "#e5e5e2",
          gray: "#747474",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#0e5e8c",
          tertiary: "#8C560E",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#2a2b2d",
          lightgray: "#202020",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#0784c1",
          tertiary: "#bf7007",
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
