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
    <span class="term-filedot"></span>
    <span class="term-title">{title}</span>
    <span class="term-winctrls">
      <span class="term-winctrl" aria-hidden="true">&#x2013;</span>
      <span class="term-winctrl" aria-hidden="true">&#x25A1;</span>
      <span class="term-winctrl term-winctrl--close" aria-hidden="true">&#x2715;</span>
    </span>
  </div>
  <div class="term-body {bodyClass}">
    {@render children()}
  </div>
</div>
