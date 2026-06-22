import { dev } from '$app/environment';
import { posts, tags } from '$lib/blog';

export const csr = dev;
export const prerender = true;

export function load() {
	return {
		posts,
		tags
	};
}
