// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/www.astro-lane.avenuelabs.co/", // Always put "/" at the end of the URL
    author: "Jack Scott",
    desc: "A personal portfolio landing template for developers and designers. Made by Avenue Labs.",
    title: "jdlennoxs",
    ogImage: "images/astro-lane.png",
    keywords:
        "Personal portfolio, landing page, page template, developer portfoliom designer portfolio",
    postPerPage: 6
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "tabler:brand-github",
        title: `Follow ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Instagram",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "tabler:brand-instagram",
        title: `Follow ${SITE.author} on Instagram`,
        active: true
    },
    {
        name: "LinkedIn",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "tabler:brand-linkedin",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "YouTube",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "tabler:brand-youtube",
        title: `${SITE.title} on YouTube`,
        active: true
    },
    {
        name: "Bluesky",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "tabler:brand-bluesky",
        title: `${SITE.title} on Bluesky`,
        active: true
    },
    // {
    //     name: "Discord",
    //     href: "https://github.com/christian-luntok/astro-lane/",
    //     icon: "",
    //     title: `${SITE.title} on Discord`,
    //     active: false
    // }
];
