<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	const Content = $derived(data.post.component);

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article class="mx-auto w-full py-10">
	<a
		href={resolve('/blog')}
		class="font-term mb-8 inline-block text-sm text-(--term-muted) hover:text-(--term-green)"
	>
		../blog
	</a>

	<header class="mb-8 border-b border-(--term-border) pb-6">
		<div class="font-term mb-3 text-sm text-(--term-muted)">
			<span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)"
				>~/blog/{data.post.slug}</span
			>$ cat post.md
		</div>
		<h1 class="glow-green mb-4 text-left font-term text-4xl font-bold text-(--term-green)">
			{data.post.title}
		</h1>
		<p class="mb-4 text-(--term-text)">{data.post.description}</p>
		<div class="flex flex-wrap items-center gap-2 font-term text-xs text-(--term-muted)">
			<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
			<span>//</span>
			{#each data.post.tags as tag (tag)}
				<span class="term-tag">{tag}</span>
			{/each}
		</div>
	</header>

	<div
		class="prose prose-invert max-w-none prose-headings:font-term prose-headings:text-(--term-green) prose-a:text-(--term-green) prose-code:text-(--term-amber) prose-pre:border prose-pre:border-(--term-border) prose-pre:bg-[rgba(13,22,18,0.75)]"
	>
		<Content />
	</div>
</article>
