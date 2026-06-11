<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Header from '$lib/components/navigations/headers/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="app dark scanlines">
	<Header />
	<main>
    {@render children()}
  </main>

	<Footer />
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    min-width: 100vw;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
