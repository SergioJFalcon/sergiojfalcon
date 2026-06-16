<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import TermWindow from '$lib/components/TermWindow.svelte';
</script>

<svelte:head>
  <title>{page.status} — Sergio Falcon</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flex min-h-full w-full items-center justify-center px-4 py-16">
  <TermWindow title="error.log" glow class="w-full max-w-xl">
    <div class="font-term space-y-3 text-sm leading-relaxed sm:text-base">
      <p class="text-(--term-muted)">
        <span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)"
          >~</span
        >$ cd {page.url.pathname}
      </p>
      <p class="text-(--term-amber)">
        bash: cd: {page.url.pathname}: No such file or directory
      </p>

      <h1 class="glow-green pt-2 text-5xl font-bold text-(--term-green) sm:text-6xl">
        {page.status}
      </h1>
      <p class="text-(--term-text)">
        {page.error?.message ?? 'Something went wrong.'}
      </p>

      <a
        href={resolve('/')}
        class="text-(--term-green) underline-offset-4 transition-colors hover:underline"
      >
        <p class="pt-3 text-(--term-muted)">
          <span class="text-(--term-green)">$</span>
          <span>cd ~</span>
          <span class="text-(--term-muted)"># return home</span>
          <span class="cursor"></span>
        </p>
      </a>
    </div>
  </TermWindow>
</div>
