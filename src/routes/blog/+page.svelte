<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	let selectedTags = $state(new Set<string>());

	const filteredPosts = $derived(
		selectedTags.size === 0
			? data.posts
			: data.posts.filter((post) => post.tags.some((tag) => selectedTags.has(tag)))
	);

	function toggleTag(tag: string) {
		const next = new Set(selectedTags);
		next.has(tag) ? next.delete(tag) : next.add(tag);
		selectedTags = next;
	}

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog posts by Sergio Falcon" />
</svelte:head>

<section class="mx-auto flex w-full flex-col py-10">
	<div class="font-term mb-2 text-sm text-(--term-muted)">
		<span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)"
			>~/blog</span
		>$ ls -t
	</div>
	<h1
		class="glow-green mb-8 text-left font-term text-4xl font-bold tracking-tight text-(--term-green) lowercase"
	>
		./blog
	</h1>

	<div class="mb-8 flex flex-col gap-3">
		<div class="flex items-center justify-between gap-4">
			<span class="term-rule w-full text-(--term-muted)">// filter by tag</span>
			{#if selectedTags.size > 0}
				<button
					onclick={() => (selectedTags = new Set())}
					class="font-term shrink-0 cursor-pointer rounded border border-(--term-border) px-2 py-0.5 text-xs text-(--term-muted) transition-all duration-150 hover:border-red-500/50 hover:text-red-400"
				>
					clear
				</button>
			{/if}
		</div>
		<div class="flex flex-wrap gap-2">
			{#each data.tags as tag (tag)}
				{@const active = selectedTags.has(tag)}
				<button
					onclick={() => toggleTag(tag)}
					class="term-tag cursor-pointer transition-all duration-150 {active
						? 'border-(--term-green-dim) bg-[rgba(86,156,214,0.18)] text-(--term-green)'
						: 'text-(--term-muted)'}"
					aria-pressed={active}
				>
					{tag}
				</button>
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		{#each filteredPosts as post (post.slug)}
			<article
				class="rounded-md border border-(--term-border) bg-[rgba(45,45,48,0.58)] p-4 transition-colors duration-150 hover:border-(--term-green-dim)"
			>
				<a href={resolve(`/blog/${post.slug}`)} class="block">
					<div
						class="font-term mb-2 flex flex-col gap-1 text-xs text-(--term-muted) sm:flex-row sm:items-center sm:justify-between"
					>
						<span>{formatDate(post.date)}</span>
						<span>{post.tags.join(' / ')}</span>
					</div>
					<h2 class="mb-2 text-left text-2xl font-semibold text-(--term-green)">
						{post.title}
					</h2>
					<p class="text-(--term-text)">{post.description}</p>
				</a>
			</article>
		{:else}
			<p class="font-term text-sm text-(--term-muted)">No posts match that tag selection.</p>
		{/each}
	</div>
</section>
