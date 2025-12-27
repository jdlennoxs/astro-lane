import { defineCollection, z } from "astro:content";

const post = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val))
            .optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default(["others"]),
        author: z.string().optional(),
        draft: z.boolean().optional(),
        featured: z.boolean().optional(),
        project: z.boolean().optional(),
        type: z.enum(['post', 'project']).default('post'),
        projectMetadata: z.object({
            techStack: z.array(z.string()).optional(),
            githubLink: z.string().optional(),
            liveLink: z.string().optional()
        }).optional(),
        heroType: z.string().optional()
    })
});

export const collections = { post };
