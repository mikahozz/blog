import { defineCollection, z } from 'astro:content';

export const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z
	.string()
	.or(z.date())
	.transform((val) => new Date(val)),
	updatedDate: z
		.string()
		.optional()
		.transform((str) => (str ? new Date(str) : undefined)),
	heroImage: z.string().optional(),
});

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: blogSchema,
});

export const collections = { blog };
