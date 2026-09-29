import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./remark-reading-time";
import { remarkMermaid } from "./src/plugins/remark-mermaid.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop'
        }
    },
    prefetch: {
        prefetchAll: true,
    },
    site: "https://www.jdlennoxs.com/",
    markdown: {
        processor: unified({ remarkPlugins: [remarkToc, remarkReadingTime, remarkMermaid] })
    },
    vite: {
        plugins: [tailwindcss()],
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
        react(),
        icon()
    ]
});
