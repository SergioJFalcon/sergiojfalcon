import type { Component } from 'svelte';

export type BlogFrontmatter = {
	title: string;
	date: string;
	description: string;
	tags: string[];
};

export type BlogPost = BlogFrontmatter & {
	slug: string;
};

export type BlogPostModule = {
	default: Component;
	metadata: BlogFrontmatter;
};

const postModules = import.meta.glob<BlogPostModule>('./posts/*.{md,svx}', {
	eager: true
});

function slugFromPath(path: string) {
	return (
		path
			.split('/')
			.at(-1)
			?.replace(/\.(md|svx)$/, '') ?? path
	);
}

export const posts: BlogPost[] = Object.entries(postModules)
	.map(([path, post]) => ({
		slug: slugFromPath(path),
		...post.metadata
	}))
	.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) =>
	a.localeCompare(b)
);

export function findPost(slug: string) {
	const path = Object.keys(postModules).find((key) => slugFromPath(key) === slug);

	if (!path) {
		return null;
	}

	return {
		slug,
		component: postModules[path].default,
		...postModules[path].metadata
	};
}
