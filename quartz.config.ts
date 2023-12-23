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
    ignorePatterns: ["private", "templates", ".obsidian", "copilot", "blog", "canvas", "newsletter"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Roboto",
        body: "Lora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4f4ec",
          lightgray: "#EEEEE4",
          gray: "#747474",
          darkgray: "#2f2f2f",
          dark: "#5c5c5c",
          secondary: "#0e5e8c",
          tertiary: "#803F12",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#313741",
          lightgray: "#21262d",
          gray: "#969696",
          darkgray: "#d5d5d5",
          dark: "#ebebec",
          secondary: "#2698d4",
          tertiary: "#803F12",
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
