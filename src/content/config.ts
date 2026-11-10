import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		category: z.string(),
		order: z.number().default(0),
		summary: z.string().optional(),
	}),
});

export const collections = { projects };
