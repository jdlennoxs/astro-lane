import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"post">[]) => {
    const nonDraftPosts = posts.filter(({ data }) => !data.draft);
    return nonDraftPosts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
};

export default getSortedPosts;
