import { getCollection } from "astro:content";
import generateOgImage from "@/utils/generateOgImage";
import type { APIRoute } from "astro";
import { SITE } from "@config";

export const GET: APIRoute = async ({ params }) => {
    if (!params.ogImage) {
        return new Response("No slug provided", { status: 400 });
    }
    const posts = await getCollection("post");
    const post = posts.find(p => p.slug === decodeURIComponent(params.ogImage as string));
    if (!post) {
        return new Response("Post not found", { status: 404 });
    }
    const image = await generateOgImage(post.data.title);
    return new Response(image, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000'
        }
    });
};

const postImportResult = await getCollection("post", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
    return posts
        .filter(({ data }) => !data.heroImage)
        .map((post) => ({
            params: {
                ogImage: encodeURIComponent(post.slug)
            }
        }));
}
