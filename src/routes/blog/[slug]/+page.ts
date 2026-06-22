import { error } from '@sveltejs/kit';
import { findPost, posts } from '$lib/blog';

export const prerender = true;

export function entries() {
	return posts.map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
	const post = findPost(params.slug);

	if (!post) {
		error(404, 'Blog post not found');
	}

	return {
		post
	};
}
