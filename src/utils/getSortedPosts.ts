import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"post">[]) => {
    console.log('Total posts received:', posts.length);

    const nonDraftPosts = posts.filter(({ data }) => !data.draft);
    console.log('Non-draft posts:', nonDraftPosts.length);
    console.log('Post titles:', nonDraftPosts.map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        draft: post.data.draft
    })));

    const sortedPosts = nonDraftPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
    console.log('Sorted posts:', sortedPosts.map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate
    })));

    return sortedPosts;
};

export default getSortedPosts;
