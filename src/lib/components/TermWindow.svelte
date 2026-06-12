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

  let minimized = $state(false);
  let maximized = $state(false);
  let closed = $state(false);

  function toggleMinimize() {
    minimized = !minimized;
    if (minimized) maximized = false;
  }

  function toggleMaximize() {
    maximized = !maximized;
    if (maximized) minimized = false;
  }

  function close() {
    closed = true;
    maximized = false;
  }

  function reopen() {
    closed = false;
    minimized = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && maximized) {
      event.preventDefault();
      maximized = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if closed}
  <button class="term-restore font-term" onclick={reopen} aria-label="Reopen {title}">
    <span class="term-filedot"></span>
    <span>{title}</span>
    <span class="term-restore-hint">[ reopen ]</span>
  </button>
{:else}
  {#if maximized}
    <button class="term-backdrop" onclick={toggleMaximize} aria-label="Restore {title}"></button>
  {/if}
  <div
    class="term-window {glow ? 'term-window--glow' : ''} {maximized
      ? 'term-window--max'
      : ''} {minimized ? 'term-window--min' : ''} {className}"
  >
    <!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
    <div class="term-titlebar" ondblclick={toggleMaximize}>
      <span class="term-filedot"></span>
      <span class="term-title">{title}</span>
      <span class="term-winctrls">
        <button class="term-winctrl" onclick={toggleMinimize} aria-label="Minimize {title}">
          &#x2013;
        </button>
        <button
          class="term-winctrl"
          onclick={toggleMaximize}
          aria-label="{maximized ? 'Restore' : 'Maximize'} {title}"
        >
          &#x25A1;
        </button>
        <button
          class="term-winctrl term-winctrl--close"
          onclick={close}
          aria-label="Close {title}"
        >
          &#x2715;
        </button>
      </span>
    </div>
    {#if !minimized}
      <div class="term-body {bodyClass}">
        {@render children()}
      </div>
    {/if}
  </div>
{/if}
