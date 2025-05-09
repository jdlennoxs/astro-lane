import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import prefetch from "@astrojs/prefetch";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
      image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
    site: "https://www.astro-lane.avenuelabs.co/",
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [remarkToc, remarkReadingTime]
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"]
        },
        ssr: {
            external: ["svgo"]
        }
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        prefetch(),
        react(),
        icon()
    ]
});
