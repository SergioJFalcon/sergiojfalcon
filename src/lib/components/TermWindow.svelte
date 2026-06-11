<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = 'sergio@falcon:~',
    glow = false,
    class: className = '',
    bodyClass = '',
    children
  }: {
    title?: string;
    glow?: boolean;
    class?: string;
    bodyClass?: string;
    children: Snippet;
  } = $props();
</script>

<div class="term-window {glow ? 'term-window--glow' : ''} {className}">
  <div class="term-titlebar">
    <span class="term-dot term-dot--red"></span>
    <span class="term-dot term-dot--amber"></span>
    <span class="term-dot term-dot--green"></span>
    <span class="term-title">{title}</span>
  </div>
  <div class="term-body {bodyClass}">
    {@render children()}
  </div>
</div>
