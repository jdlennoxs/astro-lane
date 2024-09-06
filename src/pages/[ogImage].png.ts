import { getCollection } from "astro:content";
import generateOgImage from "@/utils/generateOgImage";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => ({
    body: await generateOgImage(params.ogImage)
});

const postImportResult = await getCollection("post", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
    return posts
        .filter(({ data }) => !data.heroImage)
        .map(({ data }) => ({
            params: { ogImage: data.title }
        }));
}
